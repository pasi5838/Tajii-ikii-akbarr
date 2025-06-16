
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentAnswer = 0;

function generateQuestion() {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const isAddition = Math.random() < 0.5;
  const questionText = isAddition ? `${a} + ${b}` : `${a} - ${b}`;
  currentAnswer = isAddition ? a + b : a - b;

  document.getElementById("question").innerText = questionText;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  const answers = [currentAnswer];
  while (answers.length < 4) {
    const wrong = currentAnswer + getRandomInt(-10, 10);
    if (!answers.includes(wrong)) answers.push(wrong);
  }

  shuffleArray(answers);
  answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => {
      if (ans === currentAnswer) {
        generateQuestion();
      } else {
        alert("Jawaban salah. Coba lagi atau tekan 'Soal Berikutnya'.");
      }
    };
    optionsContainer.appendChild(btn);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.getElementById("nextBtn").onclick = generateQuestion;
generateQuestion();
