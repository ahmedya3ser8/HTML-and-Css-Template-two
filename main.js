// Filter Imgs
let switcherLis = document.querySelectorAll(".shuffle li");
let box = document.querySelectorAll(".imgs-holder .box");

switcherLis.forEach((li) => {
  li.addEventListener("click", function() {
    switcherLis.forEach((li) => {
      li.classList.remove("active");
      this.classList.add("active");
    });
    box.forEach((el) => {
      el.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
      el.style.display = "block";
    });
  })
});

// Animated our-skills

let section = document.querySelector(".our-skills");
let spansProgress = document.querySelectorAll(".prog-holder span");

window.onscroll = function() {
  if (window.scrollY >= section.offsetTop - 300) {
    spansProgress.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
}

// Icrease Number On Scrolling

let statsSection = document.querySelector(".stats");
let number = document.querySelectorAll(".stats .numbers");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= statsSection.offsetTop - 350) {
    if (!started) {
      number.forEach((n) => startCount(n));
    }
    started = true;
  }
});

function startCount(ele) {
  let numTarget = ele.dataset.num;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == numTarget) {
      clearInterval(counter);
    }
  }, 1000 / numTarget);
}