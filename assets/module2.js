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

// Confident doesn't mean correct — flip-card demo (Module 2)
// The visual flip is a CSS transform (skipped under prefers-reduced-motion).
// What assistive tech hears is controlled separately via aria-hidden on each
// face, toggled the instant a choice is made — independent of the animation,
// since backface-visibility only affects paint, not the accessibility tree.
(function () {
  var widget = document.getElementById('confidence-demo');
  if (!widget) return;

  var EXAMPLES = [
    {
      question: 'Your dataset has 15% missing values on the outcome variable. What should you do?',
      a: {
        text: '15% missing data is well within acceptable limits, so you can safely drop those cases with listwise deletion and proceed with your standard analysis — this won’t bias your results.',
        right: false,
        why: 'Listwise deletion assumes the data are missing completely at random (MCAR), which often isn’t true — and "this won’t bias your results" is stated with more certainty than the situation supports.'
      },
      b: {
        text: 'First check whether the missingness looks random (MCAR/MAR) or related to the outcome itself (MNAR) — that determines whether multiple imputation is appropriate. Run your primary analysis with and without imputation as a sensitivity check, and report the missingness pattern in your methods.',
        right: true,
        why: 'It names the actual decision point (why the data are missing) instead of assuming, and recommends a concrete sensitivity check.'
      }
    },
    {
      question: 'Your model returns a p-value of 0.04. Is your effect real?',
      a: {
        text: 'A p-value of 0.04 confirms that your effect is real and statistically significant, so you can report this as a definitive finding.',
        right: false,
        why: 'A p-value doesn’t confirm an effect is "real" — it doesn’t account for effect size, confidence interval width, model specification, or multiple comparisons.'
      },
      b: {
        text: 'A p-value of 0.04 suggests the association is unlikely by chance alone, under your model’s assumptions — but that’s not the same as confirming a real or causal effect. Check the effect size and confidence interval, whether the model is correctly specified, and whether 0.04 survives adjustment if you ran multiple comparisons.',
        right: true,
        why: 'It states what the p-value actually tells you and names the specific things still worth checking before calling it "real."'
      }
    },
    {
      question: 'Your logistic regression gives an odds ratio of 1.8 for your predictor. What does that mean?',
      a: {
        text: 'An odds ratio of 1.8 means your predictor increases the probability of the outcome by 80%.',
        right: false,
        why: 'Odds ratios don’t translate directly into probability or percentage-point changes — that depends on the baseline risk. This is a common misreading of OR output.'
      },
      b: {
        text: 'An odds ratio of 1.8 means the odds of the outcome are about 1.8 times higher for a one-unit increase in your predictor, holding other covariates constant. Check the confidence interval for precision, confirm the model converged, and check which category is the reference level.',
        right: true,
        why: 'It states what an OR actually represents and flags the reference-category check that determines the direction of the interpretation.'
      }
    }
  ];

  var idx = 0;
  var counterEl = document.getElementById('cd-index');
  var questionEl = document.getElementById('cd-question');
  var feedbackEl = document.getElementById('cd-feedback');
  var nextBtn = document.getElementById('cd-next-btn');

  var cards = {
    a: {
      btn: document.getElementById('cd-btn-a'),
      front: document.getElementById('cd-front-a'),
      back: document.getElementById('cd-back-a')
    },
    b: {
      btn: document.getElementById('cd-btn-b'),
      front: document.getElementById('cd-front-b'),
      back: document.getElementById('cd-back-b')
    }
  };

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function choose(key) {
    var ex = EXAMPLES[idx];
    ['a', 'b'].forEach(function (k) {
      var card = cards[k];
      var data = ex[k];
      card.btn.classList.add('flipped', data.right ? 'cd-right' : 'cd-wrong');
      card.btn.disabled = true;
      card.front.setAttribute('aria-hidden', 'true');
      card.back.removeAttribute('aria-hidden');
      card.back.innerHTML =
        '<strong>' + (data.right ? 'Confident and right.' : 'Confident, but wrong.') + '</strong>' +
        '<span>' + escapeHtml(data.why) + '</span>';
    });
    var chosenRight = ex[key].right;
    feedbackEl.textContent = chosenRight
      ? 'Correct — Response ' + key.toUpperCase() + ' is the confident, right answer.'
      : 'Not quite — Response ' + key.toUpperCase() + ' sounds confident but is wrong. Check the other card for the right answer.';
  }

  function render() {
    var ex = EXAMPLES[idx];
    counterEl.textContent = String(idx + 1);
    questionEl.textContent = ex.question;
    feedbackEl.textContent = '';

    ['a', 'b'].forEach(function (key) {
      var card = cards[key];
      var data = ex[key];
      card.front.innerHTML = '<span class="cd-label">Response ' + key.toUpperCase() + '</span>' + escapeHtml(data.text);
      card.back.innerHTML = '';
      card.back.setAttribute('aria-hidden', 'true');
      card.front.removeAttribute('aria-hidden');
      card.btn.classList.remove('flipped', 'cd-right', 'cd-wrong');
      card.btn.disabled = false;
      card.btn.onclick = (function (k) { return function () { choose(k); }; })(key);
    });
  }

  nextBtn.addEventListener('click', function () {
    idx = (idx + 1) % EXAMPLES.length;
    render();
  });

  render();
})();
