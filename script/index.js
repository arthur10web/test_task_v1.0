const burger = document.querySelector(".burger_menu")
const menuButton = document.querySelector(".burger_menu_border")
const navElements = document.querySelector(".nav_elements")
menuButton.addEventListener('click', () => {
    burger.classList.toggle("active")
    navElements.classList.toggle("passive_visible")
    navElements.classList.toggle("active_visible")
    // alert("hello")
})