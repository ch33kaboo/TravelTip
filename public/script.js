// selecting elements
const sunIcon = document.querySelector("#sun-icon")
const moonIcon = document.querySelector("#moon-icon")
const sunIcon1 = document.querySelector("#sun-icon1")
const moonIcon1 = document.querySelector("#moon-icon1")
const sunIcon2 = document.querySelector("#sun-icon2")
const moonIcon2 = document.querySelector("#moon-icon2")

const allPage = document.querySelector("html")


// applying actions

// this one to toggle dark mode
sunIcon.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})
moonIcon.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})
sunIcon1.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})
moonIcon1.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})
sunIcon2.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})
moonIcon2.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})

// for scrolling to top
// Get the button
let mybutton = document.getElementById('btn-back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.style.opacity = '100%';
  } else {
    mybutton.style.opacity = '0%';
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// display modal when clicking on ch33kaboo
const ch33kaboo = document.getElementById('ch33kaboo');
const modal = document.getElementById('my-modal')
ch33kaboo.addEventListener("click", () => {
    modal.checked = true;
})


// using animate on scroll
AOS.init({
    delay: 150,
    duration: 1200,
    once: true
});
