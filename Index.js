const car1 = document.querySelector(".car-1");
const car2 = document.querySelector(".car-2");
const car3 = document.querySelector(".car-3");

car2.style.border = "1.5px solid #E3000B";

function resetCarsBorders() {
  car1.style.border = "1.5px solid #AFAFAF";
  car2.style.border = "1.5px solid #AFAFAF";
  car3.style.border = "1.5px solid #AFAFAF";
}

car1.addEventListener("click", () => {
  resetCarsBorders();
  car1.style.border = "1.5px solid #E3000B";
  car1.classList.add("cart1-animation");
});

car2.addEventListener("click", () => {
  resetCarsBorders();
  car2.style.border = "1.5px solid #E3000B";
});

car3.addEventListener("click", () => {
  resetCarsBorders();
  car3.style.border = "1.5px solid #E3000B";
});
const menuButton = document.getElementById("menu");
const slideBar = document.querySelector(".Slider-bar");
const closeButton = document.getElementById("close");
const navSlider = document.querySelector(".Slider-nav");

menu.addEventListener("click", () => {
  slideBar.style.visibility = "visible";
});
closeButton.addEventListener("click", () => {
  slideBar.style.visibility = "hidden";
});
navSlider.addEventListener("click", () => {
  slideBar.style.visibility = "hidden";
});
