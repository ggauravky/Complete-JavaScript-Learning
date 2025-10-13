const container = document.querySelector(".container");

function logEvent(e) {
  console.log(e.target.textContent);
}

container.addEventListener("click", logEvent);

// const box1 = document.querySelector('.box.1');
// const box2 = document.querySelector('.box.2');
// const box3 = document.querySelector('.box.3');
// box1.addEventListener('click', logEvent);

// box2.addEventListener('click', logEvent);

// box3.addEventListener('click', logEvent);
