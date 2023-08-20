// navbar
const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-primaryDark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-gray");
  } else {
    navbar.classList.remove("bg-primaryDark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-gray");
  }
};

// mobile menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLink = document.querySelectorAll("#hLink");
const icon = document.querySelector(".la-bars");
const gelap = document.querySelector("#gelap");

hamburger.addEventListener("click", () => {
  gelap.classList.toggle("opacity-30");
  menu.classList.toggle("slide");
  icon.classList.toggle("la-times");
});

hLink.forEach((link) => {
  link.addEventListener("click", () => {
    gelap.classList.toggle("opacity-30");
    menu.classList.toggle("slide");
    icon.classList.toggle("la-times");
  });
});

// testimonial
const userTexts = document.querySelectorAll(".user-text");
const userPics = document.querySelectorAll(".user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// price
const toggleBtn = document.getElementById("toggleBtn");

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_front.classList.toggle("rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_front.classList.toggle("rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});
