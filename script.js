const body = document.body;
const startButton = document.querySelector(".start-button");
const container = document.querySelector(".container");
const quiz = document.querySelector(".quiz");

const answerOptionLabel1 = document.querySelector(".answer-option-1");
const answerOptionLabel2 = document.querySelector(".answer-option-2");
const answerOptionRadio1 = document.querySelector(".answer-1");
const answerOptionRadio2 = document.querySelector(".answer-2");

const nextQuestionButton = document.querySelector(".next-question-button");
const popUp = document.querySelector(".pop-up");
const popUpButton = document.querySelector(".pop-up-button");

// Starting a quiz when the button is pressed //
startButton.addEventListener("click", () => {
  container.style.display = "none";
  quiz.style.display = "block";
});

// Changing background colors of radio inputs when they're selected //
answerOptionRadio1.addEventListener("change", () => {
  if (answerOptionRadio1.checked) {
    answerOptionLabel1.style.backgroundColor = "#123456";
    answerOptionLabel1.style.transition = "0.4s";
    answerOptionLabel2.style.backgroundColor = "#fff";
  }
});

answerOptionRadio2.addEventListener("change", () => {
  if (answerOptionRadio2.checked) {
    answerOptionLabel2.style.backgroundColor = "#123456";
    answerOptionLabel2.style.transition = "0.4s";
    answerOptionLabel1.style.backgroundColor = "#fff";
  }
});

// Events that happen if the "next question button" is clicked but there is no user input //
nextQuestionButton.addEventListener("click", () => {
  if (!answerOptionRadio1.checked && !answerOptionRadio2.checked) {
    quiz.style.opacity = "25%";
    popUp.style.display = "block";
  }
});

popUpButton.addEventListener("click", () => {
  popUp.style.display = "none";
  quiz.style.opacity = "";
});
