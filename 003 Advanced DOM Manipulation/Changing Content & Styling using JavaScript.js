function sub(event) {
  event.preventDefault(); // stop the form from refreshing the page
  const value = document.getElementById("name").value;
  console.log(value);
}

//   const para =document.getElementById("cont");
//   console.log(para.textContent);
//   para.textContent="hii i am good"

const abc = document.getElementById("abc");
abc.innerHTML = "<p> hiii this line is changed by inner html </p>";

abc.style.color = "blue";
