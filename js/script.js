const navbar = document.querySelector(".navbar");
const toTopBtn = document.getElementById("to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("navbar-sticky");
    toTopBtn.classList.add("show-to-top-btn");
  } else {
    navbar.classList.remove("navbar-sticky");
    toTopBtn.classList.remove("show-to-top-btn");
  }
});

function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");

      const increment = target / 200;
      if (counter.innerText < target) {
        counter.innerText = Math.ceil(+counter.innerText + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

toTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("DOMContentLoaded", incrementStats);
