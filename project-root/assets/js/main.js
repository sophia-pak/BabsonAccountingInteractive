// Handle "Ask a Question" form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("messageForm");
  const messageBox = document.getElementById("message");
  const status = document.getElementById("formStatus");

  if (!form || !messageBox || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = messageBox.value.trim();

    if (!message) {
      status.textContent = "Please enter a message before submitting.";
      status.style.color = "red";
      status.classList.remove("hidden");
      return;
    }

    // Fake "send" success
    form.reset();
    status.textContent = "Thanks! Your message has been sent to Sophia Pak.";
    status.style.color = "green";
    status.classList.remove("hidden");
  });
});

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
