// select dom element
const NavBar = document.querySelector(".nav-bar");
const Burger = document.querySelector(".hamburger");
const NavList = document.querySelector(".nav-links");
const faqs = document.querySelector("#FAQ");
const faq = document.querySelectorAll(".faq");
const Header = document.querySelector(".header");
const HeroSection = document.querySelector(".hero");

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
    NavBar.classList.toggle("active");
    Burger.classList.toggle("toggle");
    NavList.classList.toggle("animate");
  }
});
//////////////////////////////////////////

// Frequently asked question
// faqs.forEach((faq) => {
//   faq.addEventListener("click", function (e) {
//     if (e.target.classList.contains("faq__question")) {
//       faq.classList.toggle("active");
//     }
//   });
// });

faqs.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq");
  clicked.classList.toggle("active");
  clicked.classList.toggle("rotate");

  // if (clicked.classList.contains("active")) {
  //   faq.forEach((f) => f.classList.remove("active"));
  //   // clicked.classList.remove("active");
  // } else {
  // }
});
///////////////////////////////////////////

// Navigation fixed functionality using intersection API

const navFixed = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) Header.classList.add("fixed");
  else Header.classList.remove("fixed");
};

const navObserver = new IntersectionObserver(navFixed, {
  root: null,
  threshold: 0,
  rootMargin: "-10px",
});

navObserver.observe(HeroSection);
/////////////////////////////////////////////////////////
