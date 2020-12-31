let contentFaq = document.querySelector(".main__contentFaq");
let wrapQuestion = document.querySelectorAll(".main__wrapQuestion");

wrapQuestion.forEach((el) => {
  el.addEventListener("click", () => {
    contentFaq.querySelector(".active").classList.remove("active");

    el.classList.toggle("active");
  });
});
