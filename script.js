const body = document.body;
const startButton = document.querySelector(".start-button");
const container = document.querySelector(".container");
const quiz = document.querySelector(".quiz");

// ANSWER OPTIONS
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

const thirdAnswerOptionLabel1 = document.querySelector(
  ".third-answer-option-1"
);
const thirdAnswerOptionLabel2 = document.querySelector(
  ".third-answer-option-2"
);
const thirdAnswerOptionRadio1 = document.querySelector(".third-answer-1");
const thirdAnswerOptionRadio2 = document.querySelector(".third-answer-2");

const fourthAnswerOptionLabel1 = document.querySelector(
  ".fourth-answer-option-1"
);
const fourthAnswerOptionLabel2 = document.querySelector(
  ".fourth-answer-option-2"
);
const fourthAnswerOptionRadio1 = document.querySelector(".fourth-answer-1");
const fourthAnswerOptionRadio2 = document.querySelector(".fourth-answer-2");

const fifthAnswerOptionLabel1 = document.querySelector(
  ".fifth-answer-option-1"
);
const fifthAnswerOptionLabel2 = document.querySelector(
  ".fifth-answer-option-2"
);
const fifthAnswerOptionRadio1 = document.querySelector(".fifth-answer-1");
const fifthAnswerOptionRadio2 = document.querySelector(".fifth-answer-2");

// NEXT QUESTION AND RESULTS BUTTONS //
const nextQuestionButton = document.querySelector(".next-question-button");
const secondNextQuestionButton = document.querySelector(
  ".second-next-question-button"
);
const thirdNextQuestionButton = document.querySelector(
  ".third-next-question-button"
);
const fourthNextQuestionButton = document.querySelector(
  ".fourth-next-question-button"
);
const resultsButton = document.querySelector(".results-button");

// POP-UP
const popUp = document.querySelector(".pop-up");
const popUpButton = document.querySelector(".pop-up-button");

// PAGE CONTENT //
const firstQuestionContent = document.querySelector(".first-question-content");
const secondQuestionContent = document.querySelector(
  ".second-question-content"
);
const thirdQuestionContent = document.querySelector(".third-question-content");
const fourthQuestionContent = document.querySelector(
  ".fourth-question-content"
);
const fifthQuestionContent = document.querySelector(".fifth-question-content");

/////////////////////////////////////////////////////////////////////////////////////////////

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

// Saving user input on the second question of the quiz //
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

// Saving user input on the third question of the quiz //
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
    fourthQuestionContent.style.display = "flex";
  }
});

///////////////////////////////////////////////////////////////////////////////////////////

// Changing background colors of radio inputs when they're selected //
fourthAnswerOptionRadio1.addEventListener("change", () => {
  if (fourthAnswerOptionRadio1.checked) {
    fourthAnswerOptionLabel1.style.backgroundColor = "#123456";
    fourthAnswerOptionLabel1.style.transition = "0.4s";
    fourthAnswerOptionLabel2.style.backgroundColor = "#fff";
  }
});

fourthAnswerOptionRadio2.addEventListener("change", () => {
  if (fourthAnswerOptionRadio2.checked) {
    fourthAnswerOptionLabel2.style.backgroundColor = "#123456";
    fourthAnswerOptionLabel2.style.transition = "0.4s";
    fourthAnswerOptionLabel1.style.backgroundColor = "#fff";
  }
});

// Saving user input on the fourth question of the quiz //
const radioButtons4 = document.getElementsByName("fourth-answer");
radioButtons4.forEach((radioButton4) => {
  radioButton4.addEventListener("click", () => {
    const selectedValue4 = document.querySelector(
      'input[name="fourth-answer"]:checked'
    ).value;
    sessionStorage.setItem("selectedAnswer4", selectedValue4);
  });
});

// Retrieving user input //
const selectedAnswer4 = localStorage.getItem("selectedAnswer4");

// Events that happen if the "next question button" is clicked but there is no user input //
fourthNextQuestionButton.addEventListener("click", () => {
  if (!fourthAnswerOptionRadio1.checked && !fourthAnswerOptionRadio2.checked) {
    quiz.style.opacity = "25%";
    popUp.style.display = "block";
  } else {
    firstQuestionContent.style.display = "none";
    secondQuestionContent.style.display = "none";
    thirdQuestionContent.style.display = "none";
    fourthQuestionContent.style.display = "none";
    fifthQuestionContent.style.display = "flex";
  }
});

///////////////////////////////////////////////////////////////////////////////////////////

// Changing background colors of radio inputs when they're selected //
fifthAnswerOptionRadio1.addEventListener("change", () => {
  if (fifthAnswerOptionRadio1.checked) {
    fifthAnswerOptionLabel1.style.backgroundColor = "#123456";
    fifthAnswerOptionLabel1.style.transition = "0.4s";
    fifthAnswerOptionLabel2.style.backgroundColor = "#fff";
  }
});

fifthAnswerOptionRadio2.addEventListener("change", () => {
  if (fifthAnswerOptionRadio2.checked) {
    fifthAnswerOptionLabel2.style.backgroundColor = "#123456";
    fifthAnswerOptionLabel2.style.transition = "0.4s";
    fifthAnswerOptionLabel1.style.backgroundColor = "#fff";
  }
});

// Saving user input on the fifth question of the quiz //
const radioButtons5 = document.getElementsByName("fifth-answer");
radioButtons5.forEach((radioButton5) => {
  radioButton5.addEventListener("click", () => {
    const selectedValue5 = document.querySelector(
      'input[name="fifth-answer"]:checked'
    ).value;
    sessionStorage.setItem("selectedAnswer5", selectedValue5);
  });
});

// Retrieving user input //
const selectedAnswer5 = localStorage.getItem("selectedAnswer5");

// Events that happen if the "see results" is clicked but there is no user input //
resultsButton.addEventListener("click", () => {
  if (!fifthAnswerOptionRadio1.checked && !fifthAnswerOptionRadio2.checked) {
    quiz.style.opacity = "25%";
    popUp.style.display = "block";
  } else {
    firstQuestionContent.style.display = "none";
    secondQuestionContent.style.display = "none";
    thirdQuestionContent.style.display = "none";
    fourthQuestionContent.style.display = "none";
    fifthQuestionContent.style.display = "none";
  }
});
