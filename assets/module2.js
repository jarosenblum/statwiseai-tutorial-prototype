// Quick self-check — Module 2: AI Basics for Researchers
// Function-select quiz (test yourself) gates the confirmatory checklist below it.
// The confirmatory checklist itself still runs on the shared app.js initChecklists()
// logic once #self-check-confirm is unhidden — no duplicate progress-bar code here.

(function () {
  var list = document.querySelector('.fn-select-list');
  if (!list) return;

  var checkBtn = document.getElementById('fn-check-btn');
  var feedback = document.getElementById('fn-feedback');
  var confirmSection = document.getElementById('self-check-confirm');
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
          result.textContent = 'Correct — StatWiseAI can help with this.';
        } else if (isCorrect && !checked) {
          result.textContent = 'Missed one — StatWiseAI can actually help with this.';
        } else if (!isCorrect && checked) {
          result.textContent = 'Not quite — this is something StatWiseAI should not be used for.';
        } else {
          result.textContent = 'Correct — this is something StatWiseAI should not be used for.';
        }
      }

      cb.disabled = true;
    });

    feedback.textContent = 'You correctly identified ' + correctCount + ' of ' + items.length + '.';
    checkBtn.disabled = true;
    checkBtn.textContent = 'Answers checked';

    if (confirmSection) confirmSection.hidden = false;
  });
})();
