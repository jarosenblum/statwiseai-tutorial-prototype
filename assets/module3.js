// Prompt Builder — Module 3: Prompting for Data Analysis

(function () {
  var form = document.getElementById('pb-form');
  if (!form) return;
  var output = document.getElementById('pb-output-text');

  var fields = ['dataset', 'question', 'design', 'outcome', 'predictor', 'covariates', 'task', 'format'];

  function checkedList(name) {
    return Array.prototype.slice.call(form.querySelectorAll('input[name="' + name + '"]:checked'))
      .map(function (el) { return el.value; });
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function render() {
    var dataset = val('pb-dataset') || '[dataset or documentation source]';
    var question = val('pb-question') || '[insert research question]';
    var design = val('pb-design') || '[cross-sectional / longitudinal / survey / cohort / clinical / administrative]';
    var outcome = val('pb-outcome') || '[name or description, type, coding if known]';
    var predictor = val('pb-predictor') || '[name or description]';
    var covariates = val('pb-covariates') || '[list]';
    var features = checkedList('features');
    var featuresText = features.length ? features.join(', ') : '[survey weights / repeated measures / clustering / missing data / linked files, etc.]';
    var task = val('pb-task') || '[choosing a model / identifying variables / generating code / reviewing output / planning sensitivity analyses]';
    var format = val('pb-format') || '[checklist / table / step-by-step plan / code / explanation]';

    var prompt =
      'I am using StatWiseAI to support analysis planning for ' + dataset + '.\n' +
      'My research question is: ' + question + '.\n' +
      'I am not uploading participant-level, proprietary, sensitive, PHI, HIPAA-regulated, or FERPA-regulated data.\n' +
      'The study design is: ' + design + '.\n' +
      'The outcome is: ' + outcome + '.\n' +
      'The main predictor or exposure is: ' + predictor + '.\n' +
      'Important covariates may include: ' + covariates + '.\n' +
      'Important data features include: ' + featuresText + '.\n' +
      'I need help with: ' + task + '.\n' +
      'Please provide: ' + format + '.\n' +
      'Please also identify assumptions, limitations, and questions I should answer before proceeding.';

    output.textContent = prompt;
  }

  form.addEventListener('input', render);
  form.addEventListener('change', render);
  render();
})();

// "Why the stronger example works" — click-to-reveal fragment popups
(function () {
  var toggles = document.querySelectorAll('.frag-toggle');
  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-target');
      var pop = document.getElementById('pop-' + id);
      if (!pop) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.textContent = expanded ? 'Show in prompt' : 'Hide';
      pop.hidden = expanded;
    });
  });
})();

// Recommended prompt structure — anatomy tile disclosures.
// Handler for .pa-toggle now lives in the shared assets/app.js (initDisclosureToggles),
// since Module 2's phase-grouped quiz reuses the exact same pattern.
