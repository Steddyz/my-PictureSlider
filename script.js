const bntUp = document.querySelector(".up-button");
const bntDown = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

bntUp.addEventListener("click", function () {
  changeSlide("up");
});

bntDown.addEventListener("click", function () {
  changeSlide("down");
});

document.addEventListener('keyup', function(event) {
  if (event.key ==='ArrowUp') {
    changeSlide('up')
  } else if(event.key ==='ArrowDown') {
    changeSlide('down')
  }
})

function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
