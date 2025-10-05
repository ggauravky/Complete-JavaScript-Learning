function magic() {
  let b1 = Array.from(document.getElementsByClassName("box"));
  // console.log(b1)
  for (let Element of b1) {
    console.log(Element.innerHTML);
    Element.innerHTML = "this is " + Element.innerHTML;
  }
}
