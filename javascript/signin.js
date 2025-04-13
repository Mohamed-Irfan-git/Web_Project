const form = document.getElementById('myForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const emailError = document.getElementById('errorEmail');
    const passwordError = document.getElementById('errorPassword');

    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    let isValid = true;

    if (email === '') {
        emailError.innerHTML = 'Email is required';
        isValid = false;
    }

    else if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Invalid email format';
        isValid = false;
    }

    if (password === '') {
        passwordError.innerHTML= 'Password is required';
        isValid = false;
    }
    else if (!passwordRegex.test(password)) {
        passwordError.innerHTML = 'Password must be at least 6 characters long and contain at least one letter and one number';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});

