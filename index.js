var count = 1;
var IncrementBtn = document.querySelector("#increment");
var decrementBtn = document.querySelector("#decrement");

IncrementBtn.addEventListener("click", function() {
  var increment = document.getElementById("count");
  +increment.textContent++;
});

decrementBtn.addEventListener("click", function() {
  var decrement = document.getElementById("count");
  +decrement.textContent--;
});