//indentify variables//

const startIt = document.getElementById("startIt");
const questionIt = document.getElementById("questionIt");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const ans1 = document.querySelector(".answer1");
const ans2 = document.querySelector(".answer2");
const ans3 = document.querySelector(".answer3");
const ans4 = document.querySelector(".answer4");
const keepTime = document.querySelector(".timer");
const scoreIt = document.getElementById("scoreIt")


let questionIndex=0;
let myArray = [];
var secondsLeft = 15;
let timer;
let score=0



//start//

function ready() {
  startIt.classList.add("hide")
  questionIt.classList.remove("hide")
  setTime(".timer")
  
}




//questions//
const questions = [
  {
    q: "Keep the change, yah filthy animal!",
    options: ["Kids", "Independance Day", "Home Alone", "This is not a 90s movie quote"],
    answer: 2
  },

  {
    q: "Now thats some high quality H20",
    options: ["Water Boy", "Water Man", "Water Kids", "This is not a 90s movie quote"],
    answer: 0
  },
  {
    q: "To Infinity... and beyond!",
    options: ["Toy Story", "Men In Black", "American Pie", "This is not a 90s movie quote"],
    answer: 0
  },

  {
    q: "Hasta La Vista, Baby",
    options: ["The Fifth Element", "Babe", "Terminator 2", "This is not a 90s movie quote"],
    answer: 2
  },

  {
    q: "As if...",
    options: ["The Blair Witch Project", "Clueless", "Good Will Hunting", "This is not a 90s movie quote"],
    answer: 1
  },

  {
    q: 'Kiss My Converse',
    options: ["The Way of The Dragon", "Enter the Dragon", "The first Dragon", "This is not a 90s movie quote"],
    answer: 3
  },

  {
    q: "You can't handle the truth!",
    options: ["Sister Act", "A Few Good Men", "Forrest Gump", "This is not a 90s movie quote"],
    answer: 2
  },

  {
    q: "How Do You Get Fired On Your Day Off",
    options: ["Friday", "The Matrix", "Poetic Justice", "This is not a 90s movie quote"],
    answer: 0
  },

  {
    q: "You're Killing Me Smalls",
    options: ["Never Been Kissed", "Happy Gilmore", "The Sandlot", "This is not a 90s movie quote"],
    answer: 2
  },

  {
    q: "WILSOOOOON!!!",
    options: ["The Cast", "The Away", "The Cast-Away", "This is not a 90s movie quote"],
    answer: 3
  },];



//run questions//
totalQuestionSpan.innerHTML = questions.length +1;

function load() {

  questionNumberSpan.innerHTML = questionIndex + 1;
  question.innerHTML = questions[questionIndex].q;
  ans1.innerHTML = questions[questionIndex].options[0];
  ans2.innerHTML = questions[questionIndex].options[1];
  ans3.innerHTML = questions[questionIndex].options[2];
  ans4.innerHTML = questions[questionIndex].options[3];
  

}
function check(element) {
  if (element.id == questions[questionIndex].answer) {
    element.classList.add("correct"); 
   

  }
  else {
    element.classList.add("wrong");

  }
  questionIndex++; 
  load()
}

load()

function gameOver() {
questionIt.classList.add("hide")
document.getElementById("scoreIt").style.visibility = "visible";
}

//timer//

 function setTime() {
   let keepTime = setInterval(function() {
     secondsLeft--;
     timer.textContent = 'Time: ' + secondsLeft;
     if(secondsLeft === 0) {
       clearInterval(timerInterval);
      
     }
   }, 1000);
 };