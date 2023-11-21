document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const password = formData.get("password");

    
    const passwordStrength = checkPasswordStrength(password);
    updatePasswordStrengthIndicator(passwordStrength);

    if (passwordStrength < 0.22) {
        alert("Password is too weak! Please use a stronger password.");
        return;
    }

    
    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
});

document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    const passwordStrength = checkPasswordStrength(password);
    updatePasswordStrengthIndicator(passwordStrength);
});

function updatePasswordStrengthIndicator(strength) {
    const indicator = document.getElementById("strength-indicator");

    if (strength < 0.33) {
        indicator.textContent = "Weak";
        indicator.style.color = "#ff4136"; 
    } else if (strength < 0.66) {
        indicator.textContent = "Moderate";
        indicator.style.color = "#ffa500"; 
    } else {
        indicator.textContent = "Strong";
        indicator.style.color = "#2ecc40"; 
    }
}


function checkPasswordStrength(password) {
    const minLength = 8;
    const hasNumber = /\d/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    const strength = (hasNumber + hasLowerCase + hasUpperCase) / 3;

    return password.length >= minLength ? strength : 0;
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const password = formData.get("password");

    
    const passwordStrength = checkPasswordStrength(password);
    updatePasswordStrengthIndicator(passwordStrength);

    if (passwordStrength < 0.22) {
        alert("Password is too weak! Please use a stronger password.");
        return;
    }

    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");

    openNewTab();
});

function openNewTab() {
    const confirmationPageUrl = 'https://playvalorant.com/en-us/confirmation';


    alert("Registration successful!");


    
    window.open(confirmationPageUrl, '_blank');
}














