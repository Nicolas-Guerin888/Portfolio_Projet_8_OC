document.addEventListener("DOMContentLoaded", () => {
    const about = document.getElementById("about")
    about.addEventListener("click", () => {
        document.querySelector(".about").scrollIntoView({behavior: 'smooth'})
    })

    const skills = document.getElementById("skills")
    skills.addEventListener("click", () => {
        document.querySelector(".skills__title").scrollIntoView({behavior: 'smooth'})
    })

    const portfolio = document.getElementById("portfolio")
    portfolio.addEventListener("click", () => {
        document.querySelector(".portfolio").scrollIntoView({behavior: 'smooth'})
    })
 
    const contact = document.getElementById("contact")
    contact.addEventListener("click", () => {
        document.querySelector(".contact").scrollIntoView({behavior: 'smooth'})
    })

    const buttonCTA = document.querySelector(".home__CTA")
    buttonCTA.addEventListener("click", () => {
        document.querySelector(".contact").scrollIntoView({behavior: 'smooth'})
    })

    const logo = document.querySelectorAll(".logo")
    logo.forEach(logo => {
        logo.addEventListener("click", () => {
            document.querySelector(".home").scrollIntoView({behavior: 'smooth'})
        })    
    })
})