
var studentDetails = document.querySelector("#studentDetails");
var headerText = document.querySelector("#headerText");
var detailsEntered = document.querySelector("#detailsEntered");
let quiz = document.querySelector("#quiz")
let answerA = document.querySelector("#answerA")
let answerB = document.querySelector("#answerB")
let answerC = document.querySelector("#answerC")
let answerD = document.querySelector("#answerD")
let qnChoice = "";
let score = 0;
let question = document.querySelector("#question")

let questionList = [
  "Qn1.",
  "Qn1.",
  "Qn1.",
  "Qn1.",
  "Qn1."

]


quiz.style.display = "none";

function details() {

  headerText.innerHTML = ""
  headerText.innerHTML = "Greetings," + studentDetails.value + ",attempt the questions below."
  detailsEntered.style.display = "none";
  quiz.style.display = "block";

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
}

submitQn1() {
  if (qnChoice == "d") {
    score += 1;
  }
    

}








