// Code Request Builder — Module 6: Requesting Code in R, Python, SAS, Stata, or SPSS
// Field-relabeled clone of Module 3's prompt builder (module3.js) -- same render()
// shape (val()/checkedList() -> bracketed-placeholder fallback -> template
// concatenation on input/change), applied to the source's own general code
// request template. No per-language branching logic: the source template is
// natural-language regardless of the language selected, so the builder doesn't
// need one (see module-06-widget-architecture-v1.md, S1 and S3).

(function () {
  var form = document.getElementById('rq-form');
  if (!form) return;
  var output = document.getElementById('rq-output-text');

  function checkedList(name) {
    return Array.prototype.slice.call(form.querySelectorAll('input[name="' + name + '"]:checked'))
      .map(function (el) { return el.value; });
  }

  function val(id) {
    var el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  function render() {
    var language = val('rq-language') || '[R / Python / SAS / Stata / SPSS]';
    var goal = val('rq-goal') || '[describe analysis goal]';
    var outcome = val('rq-outcome') || '[continuous / binary / count / time-to-event / repeated measure / other]';
    var predictor = val('rq-predictor') || '[description]';
    var covariates = val('rq-covariates') || '[list]';
    var features = checkedList('rqfeatures');
    var featuresText = features.length ? features.join(', ') : '[survey weights / strata / PSU / clustering / repeated measures / longitudinal waves / missing data]';

    var request =
      'I need code in ' + language + '.\n' +
      'The goal is to ' + goal + '.\n' +
      'I am not uploading sensitive or participant-level data.\n' +
      'Please use placeholder variable names only.\n' +
      'The outcome is ' + outcome + '.\n' +
      'The main predictor is ' + predictor + '.\n' +
      'Covariates include ' + covariates + '.\n' +
      'Important design features include ' + featuresText + '.\n' +
      'Please write commented code and include notes about assumptions, diagnostics, and what I should verify before running it.';

    output.textContent = request;
  }

  form.addEventListener('input', render);
  form.addEventListener('change', render);
  render();
})();

// "What to include" preview tiles and the language-specific example grid both
// reuse .pa-toggle/.pa-pop -- handled globally by initDisclosureToggles() in
// assets/app.js. No module-6-specific disclosure logic needed.
