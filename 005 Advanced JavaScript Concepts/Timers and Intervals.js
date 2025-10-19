let timerDisplay = document.getElementById("timerDisplay");
let startButton = document.getElementById("startTimer");
let stopButton = document.getElementById("stopTimer");
let timerId;
let seconds = 0;

startButton.addEventListener("click", () => {
  if (!timerId) {
    timerId = setInterval(() => {
      seconds++;
      timerDisplay.textContent = `Timer: ${seconds} seconds`;
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  timerDisplay.textContent += " (stopped)";
});
