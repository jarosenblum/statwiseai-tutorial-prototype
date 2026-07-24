// AI Use Log builder — Module 7: Reproducibility and Prompt History

(function () {
  var form = document.getElementById('ul-form');
  if (!form) return;
  var output = document.getElementById('ul-output-text');
  var genBtn = document.getElementById('ul-generate');
  var copyBtn = document.getElementById('ul-copy');
  var status = document.getElementById('ul-copy-status');

  // Order and labels match the source's "AI Use Log Template" exactly --
  // all 14 fields, none renamed or dropped.
  var fields = [
    ['ul-project', 'Project name'],
    ['ul-dataset', 'Dataset or documentation source'],
    ['ul-question', 'Research question'],
    ['ul-date', 'Date'],
    ['ul-task', 'StatWiseAI task'],
    ['ul-prompt', 'Prompt or prompt summary'],
    ['ul-recommendation', 'AI-generated recommendation'],
    ['ul-decision', 'Human decision'],
    ['ul-rationale', 'Rationale for decision'],
    ['ul-verification', 'Verification steps'],
    ['ul-software', 'Software/code used'],
    ['ul-reviewer', 'Reviewer or collaborator consulted'],
    ['ul-concerns', 'Remaining concerns'],
    ['ul-location', 'Location of final code/output']
  ];

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function generate() {
    var lines = fields.map(function (f) {
      return f[1] + ': ' + val(f[0]);
    });
    output.value = lines.join('\n');
  }

  genBtn.addEventListener('click', generate);

  copyBtn.addEventListener('click', function () {
    if (!output.value) return;
    navigator.clipboard && navigator.clipboard.writeText(output.value).then(function () {
      var original = copyBtn.textContent;
      copyBtn.textContent = 'Copied';
      if (status) status.textContent = 'Copied to clipboard.';
      setTimeout(function () {
        copyBtn.textContent = original;
        if (status) status.textContent = '';
      }, 1400);
    });
  });
})();
