document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");
    const fName = document.getElementById("fName");
    const sName = document.getElementById("sName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const msg = document.getElementById("msg");
    const agree = document.getElementById("agree");

    const firstError = document.getElementById("firstError");
    const secondError = document.getElementById("secondError");
    const emailError = document.getElementById("emailError");
    const numberError = document.getElementById("numberError");
    const msgError = document.getElementById("msgError");
    const agreeError = document.getElementById("agreeError");

    const submitButton = form.querySelector("button[type='submit']");

    submitButton.addEventListener("click", function (e) {
        e.preventDefault(); 

        let valid = true;

        // First Name
        if (fName.value.trim() === "") {
            firstError.textContent = "First name is required";
            valid = false;
        } else {
            firstError.textContent = "";
        }

        // Second Name
        if (sName.value.trim() === "") {
            secondError.textContent = "Second name is required";
            valid = false;
        } else {
            secondError.textContent = "";
        }

        // Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        // Phone Number
        const phonePattern = /^\+94\d{9}$/;
        if (!phonePattern.test(phone.value)) {
            numberError.textContent = "Enter a valid +94 phone number";
            valid = false;
        } else {
            numberError.textContent = "";
        }

        
        if (msg.value.trim() === "") {
            msgError.textContent = "Message cannot be empty";
            valid = false;
        } else {
            msgError.textContent = "";
        }

       
        if (!agree.checked) {
            agreeError.textContent = "You must agree to continue";
            valid = false;
        } else {
            agreeError.textContent = "";
        }

        if (valid) {
            alert("Form submitted successfully!");
            
        }
    });
});