// Lien bouton CV 
const button_CV = document.getElementById('button_CV')

button_CV.addEventListener('click', () => {
    const path = './assets/documents/CV_Nicolas_Guerin.pdf'
    
    window.open(path, '_blank')
})

// Lien bouton Carte mentale
const button_mindMap = document.getElementById('button_mindMap')

button_mindMap.addEventListener('click', () => {
    const path = './assets/documents/Nicolas_Guerin_skills_dev_web.pdf'
    
    window.open(path, '_blank')
})
    

// Lien boutons réseaux sociaux
const button_github = document.getElementById('github')

button_github.addEventListener('click', () => {
    window.open('https://github.com/Nicolas-Guerin888', '_blank')
})

const button_linkedin = document.getElementById('linkedin')

button_linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/nicolas-guérin-abaa2a2a2', '_blank')
})