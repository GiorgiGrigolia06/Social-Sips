const body = document.body;
const startButton = document.querySelector(".start-button");
const container = document.querySelector(".container");
const quiz = document.querySelector(".quiz");

const answerOptionLabel1 = document.querySelector(".answer-option-1");
const answerOptionLabel2 = document.querySelector(".answer-option-2");
const answerOptionRadio1 = document.querySelector(".answer-1");
const answerOptionRadio2 = document.querySelector(".answer-2");

const secondAnswerOptionLabel1 = document.querySelector(
  ".second-answer-option-1"
);
const secondAnswerOptionLabel2 = document.querySelector(
  ".second-answer-option-2"
);
const secondAnswerOptionRadio1 = document.querySelector(".second-answer-1");
const secondAnswerOptionRadio2 = document.querySelector(".second-answer-2");

const nextQuestionButton = document.querySelector(".next-question-button");
const secondNextQuestionButton = document.querySelector(
  ".second-next-question-button"
);
const thirdNextQuestionButton = document.querySelector(
  ".third-next-question-button"
);

const thirdAnswerOptionLabel1 = document.querySelector(
  ".third-answer-option-1"
);
const thirdAnswerOptionLabel2 = document.querySelector(
  ".third-answer-option-2"
);
const thirdAnswerOptionRadio1 = document.querySelector(".third-answer-1");
const thirdAnswerOptionRadio2 = document.querySelector(".third-answer-2");

const popUp = document.querySelector(".pop-up");
const popUpButton = document.querySelector(".pop-up-button");

const firstQuestionContent = document.querySelector(".first-question-content");
const secondQuestionContent = document.querySelector(
  ".second-question-content"
);
const thirdQuestionContent = document.querySelector(".third-question-content");

// Starting a quiz when the button is pressed //
startButton.addEventListener("click", () => {
  container.style.display = "none";
  firstQuestionContent.style.display = "flex";
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

// Saving user input on the first question of the quiz //
const radioButtons = document.getElementsByName("answer");
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    const selectedValue = document.querySelector(
      'input[name="answer"]:checked'
    ).value;
    sessionStorage.setItem("selectedAnswer", selectedValue);
  });
});

// Retrieving user input //
const selectedAnswer = localStorage.getItem("selectedAnswer");

// Events that happen if the "next question button" is clicked but there is no user input //
nextQuestionButton.addEventListener("click", () => {
  if (!answerOptionRadio1.checked && !answerOptionRadio2.checked) {
    quiz.style.opacity = "25%";
    popUp.style.display = "block";
  } else {
    firstQuestionContent.style.display = "none";
    secondQuestionContent.style.display = "flex";
  }
});

popUpButton.addEventListener("click", () => {
  popUp.style.display = "none";
  quiz.style.opacity = "";
});

///////////////////////////////////////////////////////////////////////////////////////////

// Changing background colors of radio inputs when they're selected //
secondAnswerOptionRadio1.addEventListener("change", () => {
  if (secondAnswerOptionRadio1.checked) {
    secondAnswerOptionLabel1.style.backgroundColor = "#123456";
    secondAnswerOptionLabel1.style.transition = "0.4s";
    secondAnswerOptionLabel2.style.backgroundColor = "#fff";
  }
});

secondAnswerOptionRadio2.addEventListener("change", () => {
  if (secondAnswerOptionRadio2.checked) {
    secondAnswerOptionLabel2.style.backgroundColor = "#123456";
    secondAnswerOptionLabel2.style.transition = "0.4s";
    secondAnswerOptionLabel1.style.backgroundColor = "#fff";
  }
});

// Saving user input on the first question of the quiz //
const radioButtons2 = document.getElementsByName("second-answer");
radioButtons2.forEach((radioButton2) => {
  radioButton2.addEventListener("click", () => {
    const selectedValue2 = document.querySelector(
      'input[name="second-answer"]:checked'
    ).value;
    sessionStorage.setItem("selectedAnswer2", selectedValue2);
  });
});

// Retrieving user input //
const selectedAnswer2 = localStorage.getItem("selectedAnswer2");

// Events that happen if the "next question button" is clicked but there is no user input //
secondNextQuestionButton.addEventListener("click", () => {
  if (!secondAnswerOptionRadio1.checked && !secondAnswerOptionRadio2.checked) {
    quiz.style.opacity = "25%";
    popUp.style.display = "block";
  } else {
    firstQuestionContent.style.display = "none";
    secondQuestionContent.style.display = "none";
    thirdQuestionContent.style.display = "flex";
  }
});

///////////////////////////////////////////////////////////////////////////////////////////

// Changing background colors of radio inputs when they're selected //
thirdAnswerOptionRadio1.addEventListener("change", () => {
  if (thirdAnswerOptionRadio1.checked) {
    thirdAnswerOptionLabel1.style.backgroundColor = "#123456";
    thirdAnswerOptionLabel1.style.transition = "0.4s";
    thirdAnswerOptionLabel2.style.backgroundColor = "#fff";
  }
});

thirdAnswerOptionRadio2.addEventListener("change", () => {
  if (thirdAnswerOptionRadio2.checked) {
    thirdAnswerOptionLabel2.style.backgroundColor = "#123456";
    thirdAnswerOptionLabel2.style.transition = "0.4s";
    thirdAnswerOptionLabel1.style.backgroundColor = "#fff";
  }
});

// Saving user input on the first question of the quiz //
const radioButtons3 = document.getElementsByName("third-answer");
radioButtons3.forEach((radioButton3) => {
  radioButton3.addEventListener("click", () => {
    const selectedValue3 = document.querySelector(
      'input[name="third-answer"]:checked'
    ).value;
    sessionStorage.setItem("selectedAnswer3", selectedValue3);
  });
});

// Retrieving user input //
const selectedAnswer3 = localStorage.getItem("selectedAnswer3");

// Events that happen if the "next question button" is clicked but there is no user input //
thirdNextQuestionButton.addEventListener("click", () => {
  if (!thirdAnswerOptionRadio1.checked && !thirdAnswerOptionRadio2.checked) {
    quiz.style.opacity = "25%";
    popUp.style.display = "block";
  } else {
    firstQuestionContent.style.display = "none";
    secondQuestionContent.style.display = "none";
    thirdQuestionContent.style.display = "none";
  }
});
