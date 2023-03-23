const body = document.body;
const startButton = document.querySelector(".start-button");
const container = document.querySelector(".container");
const quiz = document.querySelector(".quiz");

startButton.addEventListener("click", () => {
  container.style.display = "none";
  quiz.style.display = "block";
});
