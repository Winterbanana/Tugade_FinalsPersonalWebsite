// Password visibility toggle
document.getElementById('password-toggle').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eye-icon');
  
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.classList.remove('bi-eye-slash');
      eyeIcon.classList.add('bi-eye');
    } else {
      passwordField.type = 'password';
      eyeIcon.classList.remove('bi-eye');
      eyeIcon.classList.add('bi-eye-slash');
    }
  });
  
  // Form submission handling
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple error handling for demonstration
    if (username === "" || password === "") {
      document.getElementById('error-message').classList.remove('d-none');
    } else {
      document.getElementById('error-message').classList.add('d-none');
      
      // Redirect to the homepage after successful login
      window.location.href = "home.html"; // Replace "home.html" with the actual path to your homepage.
    }
  });
  