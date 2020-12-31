const main = document.querySelector(".main");
const card = document.querySelector(".main__card");

// if (window.innerWidth > window.innerHeight && window.innerWidth < 813) {
//   main.style.background = "url(https://i.stack.imgur.com/sValK.png) ";
//   main.style.backgroundSize = "cover";
//   card.style.display = "none";
// }

window.addEventListener("orientationchange", () => {
  if (window.innerWidth > window.innerHeight && window.innerWidth < 813) {
    main.classList.toggle("backup");
    card.classList.toggle("none");
  }
  // if (window.innerWidth > window.innerHeight && window.innerWidth < 813) {
  //   main.style.background = "url(https://i.stack.imgur.com/sValK.png) ";
  //   main.style.backgroundSize = "cover";
  //   card.style.display = "none";
  // } else {
  //   main.style.background = "unset";
  //   main.style.backgroundSize = "none";
  //   card.style.display = "block";
  // }
});
