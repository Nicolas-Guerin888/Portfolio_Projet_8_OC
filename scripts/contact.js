document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault()

    emailjs.init("mjnQG05umZisdHDAV")

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    emailjs.send("service_wecmq1a", "template_2o6q25q", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then((response) => {
        alert("Email envoyé avec succès !")
    })
    .catch((error) => {
        alert("Erreur lors de l'envoi de l'email :", error)
    })
})
