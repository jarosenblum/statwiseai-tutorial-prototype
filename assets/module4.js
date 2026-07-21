// Module 4 — Documentation review checklist: live summary of free-text answers.
//
// Deliberately NOT an aria-live region: it updates on every keystroke across up
// to 12 fields, and announcing on every keystroke would spam screen reader users
// rather than help them. Users can navigate to the summary card and read it
// whenever they choose, the same way they'd review a normal static section.
function initDocSummary() {
  var textareas = document.querySelectorAll('.dc-input textarea[data-dc-label]');
  var output = document.getElementById('dc-summary-text');
  if (!textareas.length || !output) return;

  function render() {
    var parts = [];
    textareas.forEach(function (ta) {
      var val = ta.value.trim();
      if (val) {
        parts.push(ta.getAttribute('data-dc-label') + '\n' + val);
      }
    });

    output.innerHTML = '';
    if (parts.length === 0) {
      var empty = document.createElement('p');
      empty.className = 'small';
      empty.id = 'dc-summary-empty';
      empty.style.margin = '0';
      empty.textContent = 'Nothing written yet — type an answer to any item above and it will appear here.';
      output.appendChild(empty);
      return;
    }

    parts.forEach(function (block, i) {
      var lines = block.split('\n');
      var q = document.createElement('p');
      q.style.margin = i === 0 ? '0 0 .2em' : '.9em 0 .2em';
      q.style.fontWeight = '700';
      q.style.fontSize = '.85rem';
      q.textContent = lines[0];
      var a = document.createElement('p');
      a.style.margin = '0';
      a.textContent = lines[1];
      output.appendChild(q);
      output.appendChild(a);
    });
  }

  textareas.forEach(function (ta) { ta.addEventListener('input', render); });
  render();
}

// Typing an answer auto-checks that item's checkbox, so the progress bar
// reflects real engagement without forcing a second click. Deliberately
// one-directional: clearing typed text never auto-unchecks the box, since
// the user may have checked it manually for their own reasons independent
// of what's in the textarea, and silently reversing that would override a
// decision they made themselves. Unchecking stays a fully manual action —
// dispatching a real 'change' event so app.js's initChecklists() progress
// calculation picks it up the same way a manual click would.
function initAutoCheck() {
  document.querySelectorAll('.dc-input textarea[data-dc-label]').forEach(function (ta) {
    var checkboxId = ta.id.replace(/-input$/, '');
    var cb = document.getElementById(checkboxId);
    if (!cb) return;
    ta.addEventListener('input', function () {
      if (ta.value.trim() && !cb.checked) {
        cb.checked = true;
        cb.dispatchEvent(new Event('change'));
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initDocSummary();
  initAutoCheck();
});
