/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/*=============== Work MODAL ===============*/

const workInfoViews = document.querySelectorAll(".work__description"),
  workInfoBtns = document.querySelectorAll(".work__info"),
  workInfoClose = document.querySelectorAll(".work__info-close");

let work = function (workClick) {
  workInfoViews[workClick].classList.add("active-info");
};

workInfoBtns.forEach((wb, i) => {
  wb.addEventListener("click", () => {
    work(i);
  });
});

workInfoClose.forEach((wc) => {
  wc.addEventListener("click", () => {
    workInfoViews.forEach((wv) => {
      wv.classList.remove("active-info");
    });
  });
});

/* Link active work */
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => l.classList.remove("active-work"));
  this.classList.add("active-work");
}

linkWork.forEach((l) => l.addEventListener("click", activeWork));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

const selectedTheme = "dark";
const selectedIcon = "bx bx-moon";

// We obtain the current theme that the interface has by validating the light-theme class
// const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
// const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );

  //   document.getElementById("pic").src =
  //     selectedTheme === "dark"
  //       ? "./assets/img/profileD.jpg"
  //       : "./assets/img/profileL.jpg";
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

//Active / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  //reset: true,
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, { delay: 700 });
sr.reveal(`.home__social, home__scroll`, { delay: 900, orgin: "bottom" });

let label = document.querySelectorAll("label").forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letters, i) =>
        `<span style="transition-delay: ${i * 50}ms">${letters}</span>`
    )
    .join("");
});

let textarea = document.querySelector("textarea");
textarea.onclick = function () {
  textarea.classList.toggle("active");
};

// view__more-btn
let viewMoreBtn = document.querySelector(".view__more-btn");
let currentItem = 3;

viewMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".work__container .work__card")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    viewMoreBtn.style.display = "none";
  }
};

var x = 0;
function myfun() {
  if (x == 0) {
    document.getElementById("pic").src = "./assets/img/profileL.jpg";
    x++;
  } else {
    document.getElementById("pic").src = "./assets/img/profileD.jpg";
    x = 0;
  }
}

function changeTheme(e) {
  console.log(e);
}
