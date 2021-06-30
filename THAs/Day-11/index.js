function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  }

  this.questionIndex++;
};

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice;
};

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1 id='result'>Result</h1>";
  gameOverHTML += "<h2 id='score'> Correct: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

var questions = [
  new Question(
    "1)   Hyper Text Markup Language Stand For ?",
    ["JavaScript", "XHTML", "CSS", "HTML"],
    "HTML"
  ),
  new Question(
    "2)  Which language is used for styling web pages ?",
    ["HTML", "JQuery", "CSS", "XML"],
    "CSS"
  ),
  new Question(
    "3)   Which is not a JavaScript Framework ?",
    ["Python Script", "JQuery", "Django", "NodeJS"],
    "Django"
  ),
  new Question(
    "4)   Which is used for Connect To Database ?",
    ["PHP", "HTML", "JS", "All"],
    "PHP"
  ),
  new Question(
    "5)   what does css stands for",
    [
      "cascading style sheet",
      "cascading sheet style",
      "cascading script sheet",
      "All",
    ],
    "cascading style sheet"
  ),
];

var quiz = new Quiz(questions);
populate();
setInterval(() => {
  if (moves === 0) {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    let h2 = document.createElement("h2");
    document.querySelector(".popup > div > h2").innerHTML = "You Lose !!";
  }
  if (matches === 8) {
    document.querySelector(".popup").style.display = "flex";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".popup > div > h2").innerHTML = "You Won !!";
  }
}, 100);

document.getElementById("reload").addEventListener("click", (e) => {
  window.location.reload();
});
