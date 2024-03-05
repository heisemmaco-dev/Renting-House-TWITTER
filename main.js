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
