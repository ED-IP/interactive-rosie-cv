// this function is not active yet, emailJS is not configured

function sendMail(contactForm) {
    emailjs.send("","",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailadress.value,
        "project_request": contactForm.Form.projectsummary.value
    }) 
    .then(
        function(response){
            console.log("SUCCESS", response);
        },
        function(error){
            console.log("FAILED", error);
        });
    return false;
}