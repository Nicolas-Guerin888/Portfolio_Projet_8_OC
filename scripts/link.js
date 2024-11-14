const button_CV = document.getElementById('button_CV')

button_CV.addEventListener('click', () => {
    const path = './assets/documents/CV_Nicolas_Guerin.pdf'
    
    window.open(path, '_blank')
})


const button_mindMap = document.getElementById('button_mindMap')

button_mindMap.addEventListener('click', () => {
    const path = './assets/documents/Nicolas_Guerin_skills_dev_web.pdf'
    
    window.open(path, '_blank')
})
    
