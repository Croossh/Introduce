const triggerMargin = 350;
const elementList = document.querySelectorAll(".scroll");

const scrollFunc = function () {
  for (const element of elementList) {
    if (!element.classList.contains("show")) {
      if (
        window.innerHeight >=
        element.getBoundingClientRect().top + triggerMargin
      ) {
        element.classList.add("show");
      }
    }
  }
};

window.addEventListener("load", scrollFunc);
window.addEventListener("scroll", scrollFunc);
