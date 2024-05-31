function validateLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Add animation class to the login container
        const loginContainer = document.getElementById('loginContainer');
        loginContainer.classList.add('fade-out');

        // Wait for animation to complete before redirecting
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 500);

        return false;
    } else {
        errorMessage.textContent = 'Incorrect username or password';
        errorMessage.classList.add('shake');
        setTimeout(() => errorMessage.classList.remove('shake'), 500);
        return false;
    }
}
