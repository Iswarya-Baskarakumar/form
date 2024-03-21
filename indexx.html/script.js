const form = document.querySelector('#form');
const usernameField = document.querySelector('#Username');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const cpasswordField = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        // If all validations pass, redirect to the next page
        window.location.href = 'welcome.html'; // Change 'welcome.html' to your desired next page URL
    }
});

function validateInputs() {
    const usernameVal = usernameField.value.trim();
    const emailVal = emailField.value.trim();
    const passwordVal = passwordField.value.trim();
    const cpasswordVal = cpasswordField.value.trim();
    
    let isValid = true;

    // Validate Username
    if (usernameVal === '') {
        setError(usernameField, 'Username cannot be blank');
        isValid = false;
    } else {
        setSuccess(usernameField);
    }

    // Validate Email
    if (emailVal === '') {
        setError(emailField, 'Email cannot be blank');
        isValid = false;
    } else if (!isValidEmail(emailVal)) {
        setError(emailField, 'Please enter a valid email address');
        isValid = false;
    } else {
        setSuccess(emailField);
    }

    // Validate Password
    if (passwordVal === '') {
        setError(passwordField, 'Password cannot be blank');
        isValid = false;
    } else {
        setSuccess(passwordField);
    }

    // Validate Confirm Password
    if (cpasswordVal === '') {
        setError(cpasswordField, 'Confirm Password cannot be blank');
        isValid = false;
    } else if (cpasswordVal !== passwordVal) {
        setError(cpasswordField, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(cpasswordField);
    }

    return isValid;
}

function setError(element, message) {
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');
    
    errorElement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element) {
    const inputgroup = element.parentElement;
    const labelElement = inputgroup.querySelector('label'); // Select the label element
    
    inputgroup.classList.remove('error');
    inputgroup.classList.add('success');
    labelElement.style.color = 'black';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}






