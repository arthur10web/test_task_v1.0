const menuButton = document.querySelector(".menu")
const linkList = document.querySelector('.links_section')
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle("active")
    linkList.classList.toggle('passive_visible')
    linkList.classList.toggle('active_visible')
})