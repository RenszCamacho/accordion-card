const wrapQuestion = document.querySelectorAll(".main__wrapQuestion");

wrapQuestion.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("active");
  });
});
