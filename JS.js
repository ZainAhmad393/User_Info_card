document.getElementById("form-data").addEventListener("submit", function(event) {
    event.preventDefault();

    // 1. Data Fetching
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value.trim();
    const profilecard = document.getElementById("profile-card");

    // 2. Pro Validation (Regex)
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.match(namePattern)) {
        showError("Name should only contain alphabets!");
        return;
    }
    if (!email.match(emailPattern)) {
        showError("Please enter a valid global email!");
        return;
    }
    if (age < 18 || age > 50) {
        showError("Access denied. Age must be 18-50.");
        return;
    }

    // 3. UI Pe Data Display
    document.getElementById("displayname").textContent = name;
    document.getElementById("displayage").textContent = age;
    document.getElementById("displayemail").textContent = email;

    // 4. Smooth Animation (Pro Logic)
    profilecard.style.display = "block";
    profilecard.style.opacity = "0";
    profilecard.style.transform = "translateY(30px) scale(0.9)";

    setTimeout(() => {
        profilecard.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        profilecard.style.opacity = "1";
        profilecard.style.transform = "translateY(0) scale(1)";
    }, 100);

    // Form khali kar dena
    // event.target.reset(); 
});

// 5. Advanced Theme Switcher (Color change ki jagah Theme change)
document.getElementById("change-color").addEventListener("click", function() {
    const root = document.querySelector(':root');
    const hue = Math.floor(Math.random() * 360);
    
    // Pure UI ka primary color badal dena (Dynamic Branding)
    root.style.setProperty('--primary', `hsl(${hue}, 80%, 60%)`);
    root.style.setProperty('--secondary', `hsl(${hue + 40}, 80%, 50%)`);
    
    // Haptic feedback feel (Small scale effect)
    this.style.transform = "scale(0.95)";
    setTimeout(() => this.style.transform = "scale(1)", 100);
});

// 6. Error Handling Function (Custom Alert)
function showError(message) {
    const btn = document.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    
    btn.style.background = "linear-gradient(45deg, #ff416c, #ff4b2b)";
    btn.innerHTML = message;
    
    setTimeout(() => {
        btn.style.background = "";
        btn.innerHTML = originalText;
    }, 2000);
}

// 7. Fireball Cursor (Already perfect, just optimized)
document.addEventListener("mousemove", (e) => {
    const fireball = document.createElement("div");
    fireball.className = "fireball";
    fireball.style.left = `${e.pageX}px`;
    fireball.style.top = `${e.pageY}px`;
    document.body.appendChild(fireball);

    fireball.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(2.5)', opacity: 0 }
    ], { duration: 500, easing: 'ease-out' });

    setTimeout(() => fireball.remove(), 500);
});