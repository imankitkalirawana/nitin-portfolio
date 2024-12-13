// Get the form and inputs
const form = document.getElementById('contact-form');
const inputs = form.querySelectorAll('input, textarea');

// function to remove validation styles
const clearValidationStyles = () => {
    inputs.forEach(input => {
        input.style.border = '';
        input.setAttribute('aria-invalid', 'false');
    });
};

// Validate email format
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate phone number if it is 10 digits or not
const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
};

// Handle form submission
form.addEventListener('submit', function (e) {
    // Prevent default form submission
    e.preventDefault();
    // call function to remove validation styles
    clearValidationStyles();

    let isValid = true;
    let firstError = false;

    // Validate inputs
    inputs.forEach(input => {
        // Stop validation if an error is found
        if (firstError) return;

        if (input.value.trim() === '') {
            input.style.border = '2px solid red';
            input.setAttribute('aria-invalid', 'true');
            alert(`${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required`);
            firstError = true;
            isValid = false;
        } else if (input.id === 'email' && !isValidEmail(input.value)) {
            input.style.border = '2px solid red';
            input.setAttribute('aria-invalid', 'true');
            alert('Email is invalid');
            firstError = true;
            isValid = false;
        } else if (input.id === 'phone' && !isValidPhone(input.value)) {
            input.style.border = '2px solid red';
            input.setAttribute('aria-invalid', 'true');
            alert('Phone number is invalid (should be 10 digits)');
            firstError = true;
            isValid = false;
        }
    });

    // If all inputs are valid, display success message
    if (isValid) {
        alert('Form submitted successfully!');
        // Reset form
        form.reset();
    }
});
