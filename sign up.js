document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.querySelector(".login_form form");
  
    signUpForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Capture form data
      const username = document.getElementById("UserName").value.trim();
      const email = document.getElementById("email").value.trim();
  
      // Perform basic validation
      if (validateUsername(username) && validateEmail(email)) {
        alert("Registration successful!");
        redirectToHome();
      } else {
        alert("Please enter a valid username and email.");
      }
    });
  
    // Function to validate username
    function validateUsername(username) {
      return username.length > 0; // Check if the username field is not empty
    }
  
    // Function to validate email
    function validateEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailPattern.test(email);
    }
  
    // Function to redirect to the home page
    function redirectToHome() {
      window.location.href = "index.html";
    }
  });
  