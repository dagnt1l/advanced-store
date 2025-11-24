const navbarTogglers = document.querySelectorAll('.navbar-toggler')

navbarTogglers.forEach((toggler) => {
  toggler.addEventListener('click', () => {
    const target = document.querySelector(toggler.getAttribute('data-target'))

    target.classList.toggle('show')
  })
})
