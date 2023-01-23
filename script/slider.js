const burger = document.querySelector(".burger_menu")
const menuButton = document.querySelector(".burger_menu_border")
const navElements = document.querySelector(".nav_elements")

const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);



menuButton.addEventListener('click', () => {
    burger.classList.toggle("active")
    navElements.classList.toggle("passive_visible")
    navElements.classList.toggle("active_visible")

})

sliderItems.forEach(function (slide, index) {
    if (index !== 0) slide.classList.add('hidden');

    slide.dataset.index = index;

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function () {
        showNextSlide('next');
    });
});



function showNextSlide(direction) {

    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');
    currentSlide.classList.toggle('non-visible')
    currentSlide.classList.toggle('visible')


    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;

    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
    nextSlide.classList.toggle('visible')
    nextSlide.classList.toggle('non-visible')
}