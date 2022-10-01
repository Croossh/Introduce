const topBtn = document.querySelector("#scrollTop");

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 네브바 영역 이동
const aTags = document.querySelectorAll("header a");

aTags[0].addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const getHere = document.getElementById("here");
aTags[1].addEventListener("click", () => {
  window.scrollTo({ top: getHere.offsetTop, behavior: "smooth" });
});

// for (let i = 0; i < aTags.length; i++) {
//   aTags.onclick = function (e) {
//     e.preventDefault();
//     let target = document.querySelector(this.getAttribute("href"));

//     window.scrollTo({
//       top: target.offsetTop,
//       behavior: "smooth",
//     });
//   };
// }
