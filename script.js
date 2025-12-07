// Greeting based on time of day
function setGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.innerHTML = `<h2 class="mb-4">${greeting}</h2>`;
    }
}

// Set copyright year
function setYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Form validation
function validateForm(event) {
    const form = document.getElementById('contactForm');
    if (form) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
    setYear();

    // Add form validation if on contact page
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
});