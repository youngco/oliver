// Game data: images, words, and explanations
const gameData = [
  {
    image: 'https://www.keflatwork.com/wp-content/uploads/2023/08/a-man-smoothing-the-wet-concrete-surface-of-a-path.jpg_s1024x1024wisk20cYeJnSDNOg1bssmjkUekTlMF3FwXSWhK_GNAM-OKW2GY.jpg',
    word: 'concrete',
    isRoman: true,
    explanation: 'Roman concrete was made from volcanic ash, lime, and water, used in durable structures like the Pantheon. Today’s concrete builds on their formula, used in nearly all modern construction.'
  },
  {
    image: 'https://media.istockphoto.com/id/534942499/photo/woman-hand-holding-fork.jpg?s=612x612&w=0&k=20&c=r8YAtjR2MUuyMYsk9xRBH-_zmDQDOjw4uQs75MzxXZI=',
    word: 'forks',
    isRoman: false,
    explanation: 'Forks were not widely used by the Romans. They primarily used spoons and knives for eating.'
  },
  {
    image: 'https://cdn.britannica.com/56/112156-050-E0CDD0A3/aqueduct-Pont-du-Gard-Roman-France-Nimes.jpg',
    word: 'aqueducts',
    isRoman: true,
    explanation: 'Romans built aqueducts to transport water and developed sewer systems like the Cloaca Maxima. Modern pipelines and sewer systems follow their principles.'
  },
  {
    image: 'https://images.ctfassets.net/u4vv676b8z52/190emKcedRfHxG8kw9QdVO/1a6baa6ac771fa56267a074168527db8/magnifying-glass-678x446.gif?fm=jpg&q=80',
    word: 'the magnifying glass',
    isRoman: false,
    explanation: 'While the Romans used polished glass or crystal to magnify objects (like Nero’s emerald for watching gladiator games), the magnifying glass as we know it was developed much later, around the 13th century.'
  },
  {
    image: 'https://www.midlandaircon.co.uk/wp-content/uploads/2024/05/heating-systems-MAC.jpg',
    word: 'heating systems',
    isRoman: true,
    explanation: 'The hypocaust provided underfloor heating in Roman bathhouses and homes. It inspired today’s radiant floor heating systems.'
  },
  {
    image: 'https://www.dupageforest.org/hubfs/DuPage2022/Things%20to%20Do/Recreational%20Activities/Wayfinding/wayfinding-shutterstock-1920x1080-1.jpg',
    word: 'the compass',
    isRoman: false,
    explanation: 'The compass was invented in China between 200 BC and 100 AD.'
  },
  {
    image: 'https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/37HB75HDVEI6VAMBMBXGAO5RYQ.jpg', 
    word: 'postal systems',
    isRoman: true,
    explanation: 'A state-run postal system with relay stations for fast government communication. It inspired modern postal and delivery services worldwide.'
  },
  {
    image: 'https://www.psprint.com/sites/default/files/special/opt-bg-img-1.jpg',
    word: 'the printing Press',
    isRoman: false,
    explanation: 'The printing press was invented in the 15th century by Johannes Gutenberg.'
  },
  {
    image: 'https://www.soldoncompass.com/wp-content/uploads/2022/06/shutterstock_309753647-scaled.jpg',
    word: 'gunpowder',
    isRoman: false,
    explanation: 'Gunpowder originated in China centuries after the fall of Rome.'
  },
    {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Triumphal_Arch_of_Orange%2C_built_during_the_reign_of_Augustus_on_the_Via_Agrippa_to_Lyon%2C_Arausio_%2814827022832%29.jpg',
    word: 'arches',
    isRoman: true,
    explanation: 'Roman arches allowed for strong, large structures like aqueducts and bridges. Arches remain vital in bridges and architecture for their strength.'
  }
];

// Variables to track the current question and score
let currentIndex = 0;
let correctAnswers = 0;

function loadQuestion() {
  const current = gameData[currentIndex];
  document.getElementById('image').src = current.image;
  document.getElementById('word').textContent = current.word;
  document.getElementById('feedback').textContent = '';
  document.getElementById('explanation').textContent = '';
  document.getElementById('continue-btn').style.display = 'none';

  // Update question tracker
  document.getElementById('question-tracker').textContent = `Question ${currentIndex + 1} of ${gameData.length}`;

  // Update score tracker
  document.getElementById('score').textContent = `Score: ${correctAnswers} of ${gameData.length}`;

  // Update progress bar
  const progressPercent = ((currentIndex / gameData.length) * 100).toFixed(0);
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;

  // Re-enable True/False buttons
  const buttons = document.querySelectorAll('#game button:not(#continue-btn)');
  buttons.forEach(button => button.disabled = false);
}

function submitAnswer(answer) {
  const current = gameData[currentIndex];
  const feedback = document.getElementById('feedback');
  const explanation = document.getElementById('explanation');
  const continueButton = document.getElementById('continue-btn');

  // Provide feedback
  if (answer === current.isRoman) {
    feedback.textContent = 'Correct!';
    feedback.style.color = 'green';
    correctAnswers++; // Increment correct answer count
  } else {
    feedback.textContent = 'Incorrect!';
    feedback.style.color = 'red';
  }

  // Show explanation
  explanation.textContent = current.explanation;

  // Update score tracker (after showing explanation)
  document.getElementById('score').textContent = `Score: ${correctAnswers} of ${gameData.length}`;

  // Show "Continue" button
  continueButton.style.display = 'block';

  // Disable True/False buttons
  const buttons = document.querySelectorAll('#game button:not(#continue-btn)');
  buttons.forEach(button => button.disabled = true);
}

function continueGame() {
  currentIndex++;
  if (currentIndex < gameData.length) {
    loadQuestion();
  } else {
    // Display final score
    document.getElementById('game').innerHTML = `
      <h1>Game over</h1>
      <p>Thanks for playing. Your Final Score:</p>
      <h1>${correctAnswers} of ${gameData.length}</h1>
      <a href="index.html">Play again</a>
    `;
  }
}

// Load the first question when the page loads
window.onload = loadQuestion;