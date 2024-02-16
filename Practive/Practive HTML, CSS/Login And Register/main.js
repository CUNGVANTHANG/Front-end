const wrapper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const navBtn = document.querySelector('.nav-btn')
const iconClose = document.querySelector('.icon-close')

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active')
})

navBtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})