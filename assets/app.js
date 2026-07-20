// Shared behavior across the StatWiseAI tutorial prototype

// Wire up any .checklist block to track progress in a nearby .progress-fill / .progress-label
function initChecklists() {
  document.querySelectorAll('[data-checklist]').forEach(function (block) {
    var items = block.querySelectorAll('.checklist input[type=checkbox]');
    var fill = block.querySelector('.progress-fill');
    var label = block.querySelector('.progress-label');

    function update() {
      var total = items.length;
      var checked = 0;
      items.forEach(function (cb) {
        var li = cb.closest('li');
        if (cb.checked) { checked++; li.classList.add('checked'); }
        else { li.classList.remove('checked'); }
      });
      var pct = total ? Math.round((checked / total) * 100) : 0;
      if (fill) fill.style.width = pct + '%';
      if (label) label.textContent = checked + ' of ' + total + ' confirmed (' + pct + '%)';
    }

    items.forEach(function (cb) { cb.addEventListener('change', update); });
    update();
  });
}

function initCopyButtons() {
  document.querySelectorAll('[data-copy-target]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.querySelector(btn.getAttribute('data-copy-target'));
      if (!target) return;
      var text = target.innerText || target.textContent;
      navigator.clipboard && navigator.clipboard.writeText(text).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = original; }, 1400);
      });
    });
  });
}

// Click-to-reveal disclosure tiles (.pa-toggle / .pa-pop) -- originally built for
// Module 3's prompt-anatomy tiles, promoted here since Module 2's phase-grouped
// quiz reuses the same pattern. aria-expanded + aria-controls + hidden.
function initDisclosureToggles() {
  document.querySelectorAll('.pa-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var popId = btn.getAttribute('aria-controls');
      var pop = document.getElementById(popId);
      if (!pop) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      pop.hidden = expanded;
      var indicator = btn.querySelector('.pa-indicator');
      if (indicator) indicator.textContent = expanded ? '+' : '−';
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initChecklists();
  initCopyButtons();
  initDisclosureToggles();
});
