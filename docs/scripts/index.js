// Variables for login form elements
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

let tries = 0;

console.log('Login script loaded');
loginButton.addEventListener('click', function(){ // Handles login button event and checks credentials
    if (username.value == '' && password.value == '') {
        alert('Please enter both username and password');
        tries++;
        console.log('Empty fields detected');    
    } else if (username.value != 'username' || password.value != 'password'){
        alert('Invalid username or password');
        tries++
        console.log('Invalid login attempt');
    } else {
        window.location.href = 'loginSuccess.html';
        console.log('Login successful');
        tries = 0;
    }
    attempts();
})

const attempts = () => {
    if (tries >= 10) {
        alert('Too many attempts! Please refresh to try again.');
        console.log('Too many attempts, refresh required');
        loginButton.disabled = true;
    } else if (tries >= 5) {
        alert('You can click on the "Forgot Username" or "Forgot Password" links to receive your password or username')
        console.log('Hint sent');
    }
    console.log(`Login attempts: ${tries}`); // Log the number of attempts
}


