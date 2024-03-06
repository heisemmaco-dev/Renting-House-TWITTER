let menuNav = document.querySelector(".menuNav");
let menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
  if (!menuNav.classList.contains("toggleBtn")) {
    menuNav.classList.add("toggleBtn");
    menuNav.classList.add("slide-in");

    menuBtn.classList.add("toggleImage");
    menuNav.classList.remove("slide-out");
  } else {
    menuNav.classList.remove("slide-in");
    menuNav.classList.add("slide-out");

    menuBtn.classList.remove("toggleImage");

    setTimeout(() => {
      menuNav.classList.remove("toggleBtn");
    }, 500);
  }
});

// tha auchor tag, i want to disappear when the anyone being clicked

let aTag = document.querySelectorAll(".menuNav a");
console.log(aTag);

aTag.forEach((anchorTAg) => {
  anchorTAg.addEventListener("click", () => {
    if (menuNav.classList.contains("toggleBtn")) {
      menuNav.classList.remove("slide-in");
      menuNav.classList.add("slide-out");

      menuBtn.classList.remove("toggleImage");

      setTimeout(() => {
        menuNav.classList.remove("toggleBtn");
      }, 500);
    }
  });
});

//animation funtion
window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".when");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;

    let revealpoint = 140;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//dark mode function

let darkModeContainer = document.querySelector(".dark-mode-container");
let lightModeIcon = darkModeContainer.querySelector(".light_mode");
let darkModeIcon = darkModeContainer.querySelector(".dark_mode");
let textcolor = document.querySelectorAll(".color");
let body = document.querySelector("body");

console.log(textcolor);

darkModeIcon.addEventListener("click", () => {
  darkModeContainer.classList.add("navigate");
  textcolor.forEach((text) => {
    text.style.color = "white";
  });
  body.style.backgroundColor = "black";
});

lightModeIcon.addEventListener("click", () => {
  darkModeContainer.classList.remove("navigate");
  textcolor.forEach((text) => {
    text.style.color = "#141e15";
  });
  body.style.backgroundColor = "white";
});
