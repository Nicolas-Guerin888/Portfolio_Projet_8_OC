fetch('datas/projects.json')
.then(response => response.json())
.then(data => {    
    const container = document.getElementById('projects-container')
    const firstHr = container.querySelector('hr')
    let toggle = true

    data.projects.forEach(project => {
        let projectElement
        
        if (toggle) { projectElement = `
            <div class="portfolio__version-A">
                <div class="portfolio__version-A__left">
                    <h4>${project.name}</h4>
                    <p><strong>Description du projet :</strong> ${project.description}</p>
                    <p><strong>Compétences utilisées :</strong> ${project.technologies}</p>
                    <p><strong>Problématique :</strong> ${project.problems}</p>
                    <a href="${project.githubLink}" class="portfolio__button CTA" target="_blank">LIEN VERS LE REPO GITHUB</a>
                </div>
                <div class="portfolio__version-A__right">
                    <img src="${project.image}" alt="Aperçu du site de ${project.name}">
                </div>
            </div>
            <hr>
        `
    } else {
        projectElement = ` 
            <div class="portfolio__version-B"> 
                <div class="portfolio__version-B__left"> 
                    <img src="${project.image}" alt="Aperçu du site de ${project.name}"> 
                </div> 
                <div class="portfolio__version-B__right"> 
                    <h4>${project.name}</h4> 
                    <p><strong>Description du projet :</strong> ${project.description}</p> 
                    <p><strong>Compétences utilisées :</strong> ${project.technologies.join(' / ')}</p> 
                    <p><strong>Problématique :</strong> ${project.problems}</p> 
                    <a href="${project.githubLink}" class="portfolio__button CTA" target="_blank">LIEN VERS LE REPO GITHUB</a>
                </div> 
            </div> 
            <hr> 
        `
    }
        toggle = !toggle
        firstHr.insertAdjacentHTML('afterend', projectElement)
    })
})
.catch(error => console.error('Erreur lors de la récupération des projets', error))