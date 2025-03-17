document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            
            if (name === "" || email === "") {
                document.getElementById("formMessage").textContent = "Please fill out all fields.";
                return;
            }
            
            document.getElementById("formMessage").textContent = "Form submitted successfully!";
        });
    }
});