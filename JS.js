document.getElementById("form-data").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email= document.getElementById("email").value;
    let profilecard = document.getElementById("profile-card");

    let namepattern = /^[A-Za-z ]+$/;
    let emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if(!name.match(namepattern)) {
        alert("Name should contain only alphabets!");
        return;
    }
    if(!email.match(emailpattern)){
        alert("Enter a valid email!");
        return;
    }
    if(age < 18 || age > 50){
        alert("Age must be between 18 and 50!");
        return;
    }

    document.getElementById("displayname").textContent = "Name: " + name;
    document.getElementById("displayage").textContent = "Age: " + age;
    document.getElementById("displayemail").textContent = "Email: " + email;
    profilecard.style.display = "block";
    
    setTimeout(() => {
        profilecard.style.transform = "translateY(0)";
        profilecard.style.opacity = "1";
    }, 300);

    document.getElementById("change-color").addEventListener("click", function(){
        let colors = ["lightblue", "lightgreen", "lightcoral", "lightpink", "lightyellow"];
        let randomcolor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("profile-card").style.backgroundColor = randomcolor;  
    });
});
document.addEventListener("mousemove", (e) => {
    const fireball = document.createElement("div");
    fireball.classList.add("fireball");
    fireball.style.left = e.pageX + "px";
    fireball.style.top = e.pageY + "px";
    document.body.appendChild(fireball);

    setTimeout(() => {
      fireball.remove();
    }, 500);
  });
