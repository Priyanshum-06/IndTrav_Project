// // Get form elements
// const loginForm = document.querySelector('.login_form form');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const signUpLink = document.querySelector('.sign_up a'); // Select the sign-up link

// // Create and style the success message element
// const successMessage = document.createElement('p');
// successMessage.className = 'success_message';
// successMessage.style.display = 'none'; // Hide it initially
// loginForm.appendChild(successMessage);  // Append it to the form

// // Function to validate email format
// function isValidEmail(email) {
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailPattern.test(email);
// }

// // Event listener for form submission
// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevents the default form submission

//   const email = emailInput.value.trim();
//   const password = passwordInput.value.trim();

//   // Validate email and password
//   if (!isValidEmail(email)) {
//     alert('Please enter a valid email address.');
//     return;
//   }
//   if (password.length < 6) {
//     alert('Password must be at least 6 characters long.');
//     return;
//   }

//   // Display success message
//   successMessage.textContent = 'You have successfully logged in!';
//   successMessage.style.color = '#28a745';
//   successMessage.style.display = 'block'; // Show the message

//   // Clear form fields
//   emailInput.value = '';
//   passwordInput.value = '';
  
//   // Optional: Hide the success message after a few seconds
//   setTimeout(() => {
//     successMessage.style.display = 'none';
//   }, 3000); // Hide after 3 seconds
// });

// // Redirect to sign-up page when "Sign up" link is clicked
// signUpLink.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent default link behavior
//   window.location.href = 'signup.html'; // Replace with the actual signup page URL
// });

// // Optional: Adding an event listener for the "Forgot Password?" link
// const forgotPasswordLink = document.querySelector('.password_title a');
// forgotPasswordLink.addEventListener('click', (event) => {
//   event.preventDefault();
//   alert('Redirecting to password recovery page...');
//   // Add redirection logic here if needed, e.g., window.location.href = '/forgot-password';
//   window.location.href = '/forgot-password';
// });




document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login_form form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Capture form data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Perform basic validation
    if (validateEmail(email) && validatePassword(password)) {
      // Simulate successful login
      alert("Login successful!");
      redirectToHome();
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });

  // Function to validate email
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }

  // Function to validate password (e.g., minimum 6 characters)
  function validatePassword(password) {
    return password.length >= 6;
  }

  // Function to redirect to the home page
  function redirectToHome() {
    window.location.href = "index.html";
  }

  // Sign-up link event (if you'd like separate sign-up behavior)
  const signUpLink = document.querySelector(".sign_up a");
  signUpLink.addEventListener("click", (event) => {
    // event.preventDefault();
    // alert("Sign up feature coming soon!");
    // You could redirect to a separate sign-up page here
    window.location.href = "sign up.html";
  });
});

