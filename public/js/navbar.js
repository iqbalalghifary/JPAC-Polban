var navbar = document.querySelector('#navbar')
var hamburger = document.querySelector('#hamburger')

window.addEventListener('scroll', function () {
  navbar.classList.toggle('shadow-lg', window.scrollY > 0)
})

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active')
})
