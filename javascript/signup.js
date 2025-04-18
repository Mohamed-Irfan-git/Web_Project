document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    const signUpBtn = document.querySelector("button[type='submit']");

    signUpBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let valid = true;

        firstNameError.textContent = "";
        lastNameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        if (firstName.value.trim() === "") {
            firstNameError.textContent = "First name is required.";
            valid = false;
        }

        if (lastName.value.trim() === "") {
            lastNameError.textContent = "Last name is required.";
            valid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        }

        if (password.value.trim().length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        }

       
        if (confirmPassword.value.trim() !== password.value.trim()) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        }

        if (valid) {
            alert("Successfully Signed Up!");
           
        }
    });
});