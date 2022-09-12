// select dom element
const NavBar = document.querySelector(".nav-bar");
const Burger = document.querySelector(".hamburger");
const NavList = document.querySelector(".nav-links");
const btc = document.getElementById("bitcoin");
const ethe = document.getElementById("ethereum");
const tether = document.getElementById("tether");
const doge = document.getElementById("dogecoin");
// const container = document.querySelectorAll(".container");
// const imageAnimate = document.querySelectorAll(".image-animate");

const navigation = function () {
  const NavListToggle = () => {
    NavBar.classList.toggle("active");
    Burger.classList.toggle("toggle");
    NavList.classList.toggle("animate");
    console.log("hello");
  };
  // Event listener
  Burger.addEventListener("click", NavListToggle);
};

navigation();

///////////////////////////////////////////

// SMOOTH SCROLL ANIMATION using event delegation.
NavList.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
//////////////////////////////////////////

// Reveal element on scroll functionality

// const secObsFn = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   entry.target.classList.remove("animate");
// };

// const sectionObserver1 = new IntersectionObserver(secObsFn, {
//   root: null,
//   threshold: 0.1,
// });

// container.forEach((section) => {
//   sectionObserver1.observe(section);
//   section.classList.add("animate");
// });

// const secObsFn = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) return;
//   if (
//     entry.target.classList.contains("support__image") ||
//     entry.target.classList.contains("assets")
//   ) {
//     entry.target.classList.remove("animate-left");
//   } else {
//     entry.target.classList.remove("animate-right");
//   }
// };

// const sectionObserver1 = new IntersectionObserver(secObsFn, {
//   root: null,
//   threshold: 0.1,
// });

// imageAnimate.forEach((image) => {
//   sectionObserver1.observe(image);
//   if (
//     image.classList.contains("support__image") ||
//     image.classList.contains("assets")
//   ) {
//     image.classList.add("animate-left");
//   } else {
//     image.classList.add("animate-right");
//   }
// });

//Fetching crypto prices

let settings = {
  async: true,
  scrossDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether&vs_currencies=usd",
  method: "GET",
  headers: {},
};

$.ajax(settings).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  ethe.innerHTML = response.ethereum.usd;
  tether.innerHTML = response.tether.usd;
  doge.innerHTML = response.dogecoin.usd;
});
