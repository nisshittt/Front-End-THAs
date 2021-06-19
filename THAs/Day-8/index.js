let squares = document.getElementsByClassName("grid-items");

Array.prototype.forEach.call(squares, (el) => {
  el.addEventListener("click", (event) => {
    //2.1 Toggle Class
    el.classList.toggle("chgclr");
  });
});
