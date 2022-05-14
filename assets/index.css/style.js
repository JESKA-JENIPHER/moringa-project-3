
var studentDetails = document.querySelector("#studentDetails");
var headerText = document.querySelector("#headerText");
var detailsEntered = document.querySelector("#detailsEntered");
let quiz = document.querySelector("#quiz");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let qnChoice = "";
let score = 0;
let iterationNumber = 0;
let question = document.querySelector("#question");
let qn1button = document.querySelector("#qn1button");
let qn2button = document.querySelector("#qn2button");
let qn3button = document.querySelector("#qn3button");
let qn4button = document.querySelector("#qn4button");


let questionList = [
  "Qn1.What is JS in full?",
  "Qn2.What is CSS in full?",
  "Qn3.What is HTML in full?",
  "Qn4.Who is  the father of computing?"
]

let aAnswerList = ["Javascript", "Cascading-sport", "HTML", "AlexGraham"]
let bAnswerList = ["Jstick", "Cascading Style Sheet", "Hatmall", "JohnBabbage"]
let cAnswerList = ["Javas", "CSports", "Hypertext-markUp-language", "MikeTyson"]
let dAnswerList = ["None", "Cascading-Styles", "Hypertext", "CharlesBabbage"]

quiz.style.display = "none";
qn1button.style.display = "none";
qn2button.style.display = "none";
qn3button.style.display = "none";
qn4button.style.display = "none";

function reset() {
  answerA.style.color = "white";
  answerB.style.color = "white";
  answerC.style.color = "white";
  answerD.style.color = "white";

  question.innerHTML = questionList[iterationNumber];
  answerA.innerHTML = aAnswerList[iterationNumber];
  answerB.innerHTML = bAnswerList[iterationNumber];
  answerC.innerHTML = cAnswerList[iterationNumber];
  answerD.innerHTML = dAnswerList[iterationNumber];

}

function details() {

  headerText.innerHTML = ""
  headerText.innerHTML = "Greetings," + studentDetails.value + ",attempt the questions below."
  detailsEntered.style.display = "none";
  quiz.style.display = "block";
  qn1button.style.display = "block";
  question.innerHTML = questionList[iterationNumber];

}

function aFunction() {
  answerA.style.color = "purple"
  answerB.style.color = "white"
  answerC.style.color = "white"
  answerD.style.color = "white"

  qnChoice = "a";
}

function bFunction() {
  answerA.style.color = "white"
  answerB.style.color = "purple"
  answerC.style.color = "white"
  answerD.style.color = "white"

  qnChoice = "b";
}

function cFunction() {
  answerA.style.color = "white"
  answerB.style.color = "white"
  answerC.style.color = "purple"
  answerD.style.color = "white"

  qnChoice = "c";
}

function dFunction() {
  answerA.style.color = "white"
  answerB.style.color = "white"
  answerC.style.color = "white"
  answerD.style.color = "purple"

  qnChoice = "d";
};

function submitQn1() {
  if (qnChoice == "a") {
    score += 1;
  }
  iterationNumber += 1;
  question.innerHTML = questionList[iterationNumber];
  qn1button.style.display = "none";
  qn2button.style.display = "block";

  reset();
};

function submitQn2() {
  if (qnChoice == "b") {
    score += 1;
  }
  iterationNumber += 1;
  question.innerHTML = questionList[iterationNumber];
  qn2button.style.display = "none";
  qn3button.style.display = "block";

  reset();
};

function submitQn3() {
  if (qnChoice == "c") {
    score += 1;
  }
  iterationNumber += 1;
  question.innerHTML = questionList[iterationNumber];
  qn3button.style.display = "none";
  qn4button.style.display = "block";

  reset();
};

function submitQn4() {
  if (qnChoice == "d") {
    score += 1;
  }
  iterationNumber += 1;
  headerText.innerHTML = "Your score is" +""+  + score;
  quiz.style.display = "none";

  reset();

};









