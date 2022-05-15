//variable definitions//
var studentDetails = document.querySelector("#studentDetails");
var headerText = document.querySelector("#headerText");
var detailsEntered = document.querySelector("#detailsEntered");
let quiz = document.querySelector("#quiz");
let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");
let answerD = document.querySelector("#answerD");
let qnChoice = "";  // place holder for the answer
let score = 0;
let iterationNumber = 0; // acts like count
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

let aAnswerList = ["A.Javascript", "A.Cascading-sport", "A.HTML", "A.AlexGraham"]
let bAnswerList = ["B.Jstick", "B.Cascading Style Sheet", "B.Hatmall", "B.JohnBabbage"]
let cAnswerList = ["C.Javas", "C.CSports", "C.Hypertext-markUp-language", "C.MikeTyson"]
let dAnswerList = ["D.None", "D.Cascading-Styles", "D.Hypertext", "D.CharlesBabbage"]

quiz.style.display = "none";
qn1button.style.display = "none";
qn2button.style.display = "none";
qn3button.style.display = "none";
qn4button.style.display = "none";

//this reset function will avoid rewriting code several times
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

//this will target the first part of the page before the quiz is displayed
function details() {

  headerText.innerHTML = ""
  headerText.innerHTML = "Greetings " + studentDetails.value + ",attempt the questions below by clicking on the correct answer." //places the name entered and replaces the initial sentence.
  detailsEntered.style.display = "none";// will not show the text
  quiz.style.display = "block";           //shows the text
  qn1button.style.display = "block";
  question.innerHTML = questionList[iterationNumber];

}


//functions to dictate the color of text when clicked on
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


//button fnts resulting to change of buttons from one qn to another
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
  headerText.innerHTML = "Your score is :" + " S" + + score; //will show the score in the headerText
  quiz.style.display = "none";

  reset();

};









