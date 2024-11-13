let lastScrollTop = 0
const navbar = document.querySelector('.navbar')
let scrollTimeout

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY || document.documentElement.scrollTop

  if (currentScroll > 0) {
    navbar.classList.add('navbar-shadow')

    // Réinitialiser le timer de disparition au moment du scroll
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      if (window.scrollY > 0) { // Vérifie encore une fois si l'utilisateur est en haut
        navbar.classList.add('hidden-navbar')
      }
    }, 2000) // Délai de 2 secondes avant de cacher la navbar
  } else {
    navbar.classList.remove('navbar-shadow')
    navbar.classList.remove('hidden-navbar')
  }

  if (currentScroll < lastScrollTop) {
    // On scrolle vers le haut, montre la navbar
    navbar.classList.remove('hidden-navbar')
  }

  // Pour éviter les valeurs négatives
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll
})
