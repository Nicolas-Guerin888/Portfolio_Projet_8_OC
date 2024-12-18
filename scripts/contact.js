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
        const successMessage = document.getElementById('success-message')
        successMessage.style.display = 'block'

        document.getElementById('contact-form').reset()

        setTimeout(() => { successMessage.style.display = 'none'}, 5000)
    })
    .catch((error) => {
        const errorMessage = document.getElementById('error-message')
        errorMessage.style.display = 'block'

        setTimeout(() => { errorMessage.style.display = 'none'}, 5000)
    })
})
