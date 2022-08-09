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



// using animate on scroll
AOS.init({
    delay: 150,
    duration: 1200,
    once: true
});
