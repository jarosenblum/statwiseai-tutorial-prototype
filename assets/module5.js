// Red-flag spotting quiz — Module 5
// Same select-all-that-apply + per-item reveal mechanic as Module 2's
// fn-select-list (.fn-select-list / .fn-row / .fn-result, fn-right/fn-wrong
// classes, unchanged) -- module2.js hardcoded that logic to a single
// instance via getElementById. This page runs four independent scenario
// blocks, so the logic is generalized here the same way app.js's own
// initChecklists() handles multiple instances: querySelectorAll(...).forEach(...)
// over a data-attribute, no shared IDs required.
(function () {
  document.querySelectorAll('[data-rf-quiz]').forEach(function (quiz) {
    var list = quiz.querySelector('.fn-select-list');
    var checkBtn = quiz.querySelector('.rf-check-btn');
    var feedback = quiz.querySelector('.rf-feedback');
    if (!list || !checkBtn) return;
    var items = list.querySelectorAll('li[data-correct]');

    checkBtn.addEventListener('click', function () {
      var correctCount = 0;

      items.forEach(function (li) {
        var cb = li.querySelector('input[type=checkbox]');
        var result = li.querySelector('.fn-result');
        var isCorrect = li.getAttribute('data-correct') === 'true';
        var checked = cb.checked;
        var right = (isCorrect && checked) || (!isCorrect && !checked);

        if (right) correctCount++;
        li.classList.toggle('fn-right', right);
        li.classList.toggle('fn-wrong', !right);

        if (result) {
          if (isCorrect && checked) {
            result.textContent = 'Correct — that is a red flag in this response.';
          } else if (isCorrect && !checked) {
            result.textContent = 'Missed one — that is a red flag in this response.';
          } else if (!isCorrect && checked) {
            result.textContent = 'Not quite — that is not what is wrong with this particular response.';
          } else {
            result.textContent = 'Correct — not an issue in this situation.';
          }
        }

        cb.disabled = true;
      });

      if (feedback) {
        feedback.textContent = 'You correctly identified ' + correctCount + ' of ' + items.length + '.';
      }
      checkBtn.disabled = true;
      checkBtn.textContent = 'Answers checked';
    });
  });
})();
