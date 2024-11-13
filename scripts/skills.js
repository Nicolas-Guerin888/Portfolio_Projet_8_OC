fetch('datas/skills.json')
.then(response => response.json())
.then(data => { 
    data.skills.forEach(skill => {
        const skillElement = `
            <div class="skills__tech-list__tech">
                <div class="skills__tech-list__tech--A"></div>
                <div class="skills__tech-list__tech--B">
                    <img src="${skill.logo}" alt="Logo ${skill.name}">
                    </div>
                    <div class="skills__tech-list__tech--C"></div>
                    <div class="skills__tech-list__tech--name">
                        <h4>${skill.name}</h4>
                    </div>
                </div>
        `
    const container = document.querySelector('.skills__tech-list')
    container.insertAdjacentHTML('beforeend', skillElement)
    })
})
.catch(error => console.error('Erreur lors de la récupération des skills', error))

fetch('datas/skills.json')
.then(response => response.json())
.then(data => { 
    data.skills_in_progress.forEach(skill_in_progress => {
        const containerImg = document.createElement("div")
        containerImg.className = "skills__in-progress__logo--containerImg"

        const imgElement = document.createElement("img")
        imgElement.src = skill_in_progress.logo
        imgElement.alt = `Logo ${skill_in_progress.name}`

        // Ce code permet de modifier le style CSS en fonction du format du logo
        imgElement.onload = () => {
            if (imgElement.naturalHeight > imgElement.naturalWidth)
                { imgElement.classList.add('portrait') 
            } else {
                imgElement.classList.add('landscape') }
            }

        containerImg.appendChild(imgElement)

        const SkillsContainer = document.querySelector(".skills__in-progress__logo")
        SkillsContainer.appendChild(containerImg)
        })
})
.catch(error => console.error('Erreur lors de la récupération des skills', error))
