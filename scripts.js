//MOUNTAIN PARALLAX FUNCTION========== HEADER
// nav bar open functions

function menuToggle() {
  var menuToggle = document.getElementById("menuToggle");
  var mainMenu = document.getElementById("mainMenu");
  var overlay = document.querySelector(".menu-overlay");

  menuToggle.classList.toggle("active");
  mainMenu.classList.toggle("closed");
  overlay.classList.toggle("closed");
}

//PARALLAX FUNCTION
document.addEventListener("scroll", () => {
  var top = window.pageYOffset;
  var one = document.querySelector(".one");
  var two = document.querySelector(".two");
  var three = document.querySelector(".three");
  var four = document.querySelector(".four");
  var five = document.querySelector(".five");

  one.style.bottom = -(top * 0.15) + "px";
  two.style.bottom = -(top * 0.2) + "px";
  three.style.bottom = -(top * 0.3) + "px";
  four.style.bottom = -(top * 0.4) + "px";
  five.style.bottom = -(top * 0.5) + "px";
});

// // background height setter
// function setBackgroundHeight(){
// 	var content = document.getElementById('content');
// 	var background = document.getElementById('background');
// 	console.log(background);
// 	console.log(content);
// 	var contentHeight = content.clientHeight;

// 	background.setAttribute('style', 'max-height: ' + contentHeight + 'px');

// }

// window.addEventListener('resize', setBackgroundHeight());

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    var mountainQuote = document.getElementById("mountain-quote");
    if (mountainQuote) {
      mountainQuote.classList.add("zoom");
    }
  }, 200);

  var modals = document.getElementsByClassName("modal");
  if (modals) {
    var windowWidth = window.innerWidth;
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.maxWidth = windowWidth + "px";
    }
  }

  var mountains = document.querySelector(".mountains");
  var mountainWrapper = document.querySelector(".mountain-wrapper");

  var mountainQuote = document.querySelector(".mountain-quote");
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let ratio = screenWidth / screenHeight;
  if (ratio < 0.8 && screenWidth > 576) {
    if (mountains) {
      mountains.style.height = "70vh";
      mountains.style.top = "0";
    }
    if (mountainWrapper) {
      mountainWrapper.style.height = "70vh";
    }
  }
  if (ratio < 0.7 && screenWidth > 576) {
    if (mountains) {
      mountains.style.height = "60vh";
      mountains.style.top = "0";
    }
    if (mountainWrapper && screenWidth > 576) {
      mountainWrapper.style.height = "60vh";
    }
  }
});
