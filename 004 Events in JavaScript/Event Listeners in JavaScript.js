const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

function logEvent(e) {
  console.log(e.type);
}

box1.addEventListener("click", logEvent);
box2.addEventListener("dblclick", logEvent);
box3.addEventListener("mouseover", logEvent);

// box1.onclick = logEvent;
// box2.ondblclick = logEvent;
// box3.onmouseover = logEvent;

// box1.removeEventListener('click', logEvent);
// box2.removeEventListener('dblclick', logEvent);
// box3.removeEventListener('mouseover', logEvent);

// box1.onclick = null;
// box2.ondblclick = null;
// box3.onmouseover = null;
