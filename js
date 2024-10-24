document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulate a login process
    if (username === "user" && password === "pass") {
        document.getElementById('message').innerText = "Login successful!";
    } else {
        document.getElementById('message').innerText = "Invalid credentials. Please try again.";
    }
});
