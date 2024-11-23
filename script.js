const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    event.preventDefault()
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
})

const header = document.querySelector('.primary-header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector(".logo")
    const mediaQuery = window.matchMedia("(min-width: 769px)")

    window.addEventListener("scroll", () => {
        if (mediaQuery.matches) {
            if (window.scrollY > 50) {
                logo.classList.add("scrolled")
            } else {
                logo.classList.remove("scrolled")
            }
        }
    })
})

const sizeButtons = document.querySelectorAll('.size-button')
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        sizeButtons.forEach(btn => btn.classList.remove('selected'))
        button.classList.add('selected')
    })
});

