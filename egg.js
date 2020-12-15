const quote = document.getElementsByClassName("quote")[0];

let clicked = 1;

quote.addEventListener("click", () => {
  clicked = (clicked + 1) % 7;
  if (clicked === 0) {
    quote.classList.add("animated-text");
  }
});
