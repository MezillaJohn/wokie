// select dom element
const NavBar = document.querySelector(".nav-bar");
const Burger = document.querySelector(".hamburger");
const NavList = document.querySelector(".nav-bar ul");
const btc = document.getElementById("bitcoin");
const ethe = document.getElementById("ethereum");
const tether = document.getElementById("tether");
const doge = document.getElementById("dogecoin");

const navigation = function () {
  const NavListToggle = () => {
    NavBar.classList.toggle("active");
    Burger.classList.toggle("toggle");
    NavList.classList.toggle("animate");
  };

  // Event listeners
  Burger.addEventListener("click", NavListToggle);
};

navigation();

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
