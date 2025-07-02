const stopButton = document.getElementById('stop');
const scoreElement = document.getElementById('score');
const totalScoreElement = document.getElementById('totalScore');
const countdownElement = document.getElementById('countdown');
const countdown = document.getElementById('countdown');
const qaSets = document.querySelectorAll('.qa_set');
const qaAnswerInputs = document.querySelectorAll('.qa_set .qa_ans_row input');

// Define some variables to keep track of the quiz state
let currentQuestionIndex = 0;  // index of the current question in the quiz
let currentScore = 0;// user's current score
let duration = 0;// duration of the countdown timer
let timerInterval = null; // reference to the timer interval

// Function to update the UI to show the current question
function showQuestion() {
  for (let i = 0; i < qaSets.length; i++) {
    qaSets[i].classList.remove('active');
  }if(currentQuestionIndex==qaSets.length-1){
    countdown.style.display='none';
  }
  qaSets[currentQuestionIndex].classList.add('active');  // show the current question
}

// Function to handle a user clicking on an answer
function handleAnswerClick(event) {
  const input = event.target;
  const isValid = input.getAttribute('valid') === 'valid';
  if (isValid) {
    currentScore += 10;  // add points to the user's score 
    countdownElement.textContent=0;
  } 

  scoreElement.textContent = currentScore;
  totalScoreElement.textContent = currentScore;
  // Wait a bit and then move to the next question
  setTimeout(() => {
    moveToNextQuestion();
    duration = 0;   // reset the duration of the timer
  }, 500);
}

// Function to move to the next question in the quiz
function moveToNextQuestion() {
  currentQuestionIndex++;
  
  showQuestion();
  if (currentQuestionIndex === qaSets.length) {
    stopButton.style.display = 'none';
    clearInterval(timerInterval);
    countdownElement.textContent = 0;
  }
}


// Event listeners for answer inputs
qaAnswerInputs.forEach((input) => {
  input.addEventListener('click', handleAnswerClick);
});

// Function to update the countdown timer and move to the next question when it reaches zero
function updateTimer() {
  duration++;
  countdownElement.textContent = 25 - duration;
  if (duration === 25) {
    moveToNextQuestion();
    duration = 0;
  }
}

// Start the timer
timerInterval = setInterval(updateTimer, 1000);

// Show the first question to start the quiz
showQuestion();
