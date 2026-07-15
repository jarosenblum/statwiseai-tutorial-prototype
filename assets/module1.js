// "Can I upload this?" decision tree — Module 1: Responsible Use
// Small tree keyed by node id. Each node is either a question (choices) or a result.

var DT_TREE = {
  start: {
    type: 'question',
    text: 'What do you want to enter into StatWiseAI?',
    choices: [
      { label: 'Public dataset documentation, codebook, or metadata', next: 'public_docs' },
      { label: 'Simulated or practice data I created myself', next: 'ok_sim' },
      { label: 'Participant-level research data, PHI, or records with identifiers', next: 'no_participant' },
      { label: "I'm honestly not sure", next: 'ask_unsure' }
    ]
  },
  public_docs: {
    type: 'question',
    text: 'Is this documentation restricted by a data-use agreement, or does it contain any identifiers?',
    choices: [
      { label: 'No — it is fully public (e.g., a published codebook or questionnaire)', next: 'ok_public' },
      { label: 'Yes, or I’m not certain', next: 'ask_dua' }
    ]
  },
  ok_sim: {
    type: 'result', tone: 'ok',
    title: 'Go ahead — with care.',
    text: 'Simulated or practice data is allowed. Keep it clearly labeled as simulated in your prompt so StatWiseAI (and anyone reviewing prompt history later) doesn’t mistake it for real records.'
  },
  ok_public: {
    type: 'result', tone: 'ok',
    title: 'This is generally fine to enter.',
    text: 'Public, unrestricted documentation — codebooks, metadata, variable descriptions — is exactly what StatWiseAI is designed to work with. Still avoid pasting anything that includes small-cell counts or indirect identifiers.'
  },
  no_participant: {
    type: 'result', tone: 'no',
    title: 'Do not upload this.',
    text: 'Participant-level data, PHI, educational records, HIPAA- or FERPA-regulated information, and other restricted or identifiable data must never go into StatWiseAI. Use public documentation or simulated data instead, or work with placeholder variable names.'
  },
  ask_dua: {
    type: 'result', tone: 'ask',
    title: 'Check before entering it.',
    text: 'When a data-use agreement or restriction might apply, don’t guess. Consult your PI, IRB, or data governance office first.'
  },
  ask_unsure: {
    type: 'result', tone: 'ask',
    title: 'When in doubt, don’t upload it.',
    text: 'If you can’t tell which category something falls into, treat it as restricted until you’ve confirmed otherwise with your PI, IRB, or data governance office.'
  }
};

(function () {
  var container = document.getElementById('decision-tree');
  if (!container) return;
  var trailEl = container.querySelector('.dt-trail');
  var qEl = container.querySelector('.dt-question');
  var resultEl = container.querySelector('.dt-result');
  var restartBtn = container.querySelector('[data-dt-restart]');
  var trail = [];

  function renderQuestion(nodeId) {
    var node = DT_TREE[nodeId];
    resultEl.className = 'dt-result';
    resultEl.innerHTML = '';
    qEl.style.display = '';
    qEl.innerHTML = '';

    var p = document.createElement('p');
    p.textContent = node.text;
    qEl.appendChild(p);

    var choicesWrap = document.createElement('div');
    choicesWrap.className = 'dt-choices';
    node.choices.forEach(function (choice) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn';
      btn.textContent = choice.label;
      btn.addEventListener('click', function () {
        trail.push(choice.label);
        renderTrail();
        var next = DT_TREE[choice.next];
        if (next.type === 'question') {
          renderQuestion(choice.next);
        } else {
          renderResult(next);
        }
      });
      choicesWrap.appendChild(btn);
    });
    qEl.appendChild(choicesWrap);
  }

  function renderResult(node) {
    qEl.style.display = 'none';
    resultEl.className = 'dt-result show ' + node.tone;
    resultEl.innerHTML = '<strong>' + node.title + '</strong><p style="margin:.5em 0 0;font-weight:400;">' + node.text + '</p>';
  }

  function renderTrail() {
    trailEl.innerHTML = '';
    trail.forEach(function (label) {
      var span = document.createElement('span');
      span.textContent = label.length > 40 ? label.slice(0, 40) + '…' : label;
      trailEl.appendChild(span);
    });
  }

  function restart() {
    trail = [];
    renderTrail();
    renderQuestion('start');
  }

  restartBtn.addEventListener('click', restart);
  restart();
})();
