// selecting elements
const sunIcon = document.querySelector("#sun-icon")
const moonIcon = document.querySelector("#moon-icon")
const allPage = document.querySelector("html")


// applying actions

// this one to toggle dark mode
sunIcon.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})
moonIcon.addEventListener("click", () => {
    allPage.classList.toggle("dark")
})