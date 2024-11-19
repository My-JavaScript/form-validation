document.getElementById('myform').addEventListener('submit', function (event) {

    //prevent the form from submitting if there are validation errors
    event.preventDefault();

    //Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    //Get error message element
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    //Reset error message
    nameError.style.display = 'none';
    emailError.style.display = 'none';

    let valid = true;

    //Validate name
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    }

    //Validate email
    if (!validateEmail(email)) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        valid = false;
    }

    //If all validation are passed submit the form
    if (valid) {
        alert('Form submitted successfully');
    }
});

function validateEmail(email) {
    //simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
