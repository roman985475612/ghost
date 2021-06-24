const delay = 500
const animationDelay = 4000
let currentSlide = 1

const slider = document.querySelector('.slider')
slider.addEventListener('click', e => {
    if (! e.target.classList.contains('slider__icon')) {
        return
    }

    let id = e.target.dataset.id
    currentSlide = id
    showSliderById(id)
})

initSlider()

function showSliderById(id) {
    let current = slider.querySelector('[data-slide="' + id + '"]')

    slider.querySelectorAll('.slider__slide').forEach(slide => {
        slide.style.opacity = 0
        setTimeout(() => {
            slide.classList.add('hide')
        }, delay)
    })

    setTimeout(() => {
        current.classList.remove('hide')
        current.style.opacity = 1
    }, delay)
}

function initSlider() {
    setInterval(() => {
        showSliderById(getSliderId())
    }, animationDelay)
}

function getSliderId() {
    currentSlide++
    currentSlide = currentSlide % maxSlide() === 0 ? 1 : currentSlide
    return currentSlide
}

function maxSlide() {
    return document.querySelectorAll('.slider__slide').length + 1
}