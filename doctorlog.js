document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.createElement('p');
  errorMessage.style.color = 'red';
  errorMessage.style.fontWeight = 'bold';
  errorMessage.textContent = 'Invalid credentials. Please try again.';
  errorMessage.style.display = 'none';
  loginForm.appendChild(errorMessage);

  // Hardcoded user data (username, email, and password)
  const users = [
    { username: 'user1', email: 'user1@example.com', password: 'password1' },
    { username: 'user2', email: 'user2@example.com', password: 'password2' }
    // Add more users as needed
  ];

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Check if the entered credentials match any user data
    const matchedUser = users.find(user => (
      user.username === username &&
      user.email === email &&
      user.password === password
    ));

    if (matchedUser) {
      // Redirect to appointment.html upon successful login
      window.location.href = 'appointment.html'; // Redirect to the appointment page
    } else {
      // Show error message for invalid credentials
      errorMessage.style.display = 'block';
    }
  });
});
