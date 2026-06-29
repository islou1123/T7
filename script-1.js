console.log("JavaScript Connected");

// ================= WELCOME BUTTON =================

const btn = document.getElementById("btn");

if(btn){

  btn.addEventListener("click", function(){

    alert("Welcome to my Portfolio Website!");

  });

}

// ================= DARK MODE =================

const darkBtn = document.getElementById("darkBtn");

console.log("Dark Mode Button:", darkBtn);

if(darkBtn){

  darkBtn.addEventListener("click", function(){
    console.log("Dark Mode Toggled!");
    document.body.classList.toggle("dark-mode");
    console.log("Current classes:", document.body.className);

  });

} else {
  console.log("Dark Mode button not found!");
}

// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

if(form){

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){

      alert("Please fill in all fields.");

    } else {

      alert("Message sent successfully!");

      // Save Data
      localStorage.setItem("username", name);
      localStorage.setItem("useremail", email);

      form.reset();

    }

  });

}

// ================= DYNAMIC TEXT =================

const changingText = document.getElementById("changing-text");

const textArray = [
  "Aspiring Web Developer",
  "Future Front-End Developer",
  "Creative Designer",
  "JavaScript Learner"
];

let index = 0;

setInterval(function(){

  index++;

  if(index >= textArray.length){
    index = 0;
  }

  changingText.textContent = textArray[index];

}, 2000);
