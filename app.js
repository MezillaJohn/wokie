// select dom element
const NavBar = document.querySelector(".nav-bar");
const Burger = document.querySelector(".hamburger");
const NavList = document.querySelector(".nav-links");
const faqs = document.querySelector("#FAQ");
const faq = document.querySelectorAll(".faq");
const Header = document.querySelector(".header");
const HeroSection = document.querySelector(".hero");
const Overlay = document.querySelector(".overlay");

const ToggleClass = function () {
  NavBar.classList.toggle("active");
  Burger.classList.toggle("toggle");
  NavList.classList.toggle("animate");
  Overlay.classList.toggle("backdrop");
};

const navigation = function () {
  const NavListToggle = () => {
    ToggleClass();
  };

  const Backdrop = () => {
    ToggleClass();
  };
  // Event listener
  Burger.addEventListener("click", NavListToggle);
  Overlay.addEventListener("click", Backdrop);
};

navigation();

///////////////////////////////////////////

// SMOOTH SCROLL ANIMATION using event delegation.
NavList.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    ToggleClass();
    Overlay.classList.remove("backdrop");
  }
});

faqs.addEventListener("click", function (e) {
  const clicked = e.target.closest(".faq");
  clicked.classList.toggle("active");
  clicked.classList.toggle("rotate");
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
