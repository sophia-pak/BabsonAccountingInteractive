// Form messaging
const messageForm = document.getElementById('messageForm');
if (messageForm) {
  messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const message = messageForm.querySelector('textarea').value.trim();
    const status = document.getElementById('formStatus');
    if (message.length > 0) {
      status.textContent = "Message sent! We'll get back to you soon.";
      status.style.color = "green";
      messageForm.reset();
    } else {
      status.textContent = "Please enter a message.";
      status.style.color = "red";
    }
  });
}

// Quiz answer checker
function checkAnswer(inputId, correctAnswer) {
  const input = document.getElementById(inputId);
  const feedback = document.getElementById(`feedback-${inputId}`);
  if (!input || !feedback) return;

  const userAnswer = input.value.trim().toLowerCase();
  const correct = correctAnswer.toLowerCase();

  if (userAnswer === correct) {
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Incorrect. Try again.`;
    feedback.style.color = "red";
  }
}

// Faculty card flip
function flipCard(card) {
  card.classList.toggle('flipped');
}
