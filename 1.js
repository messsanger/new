// Function to set the username in a cookie
function setUsername() {
    const usernameInput = document.getElementById('usernameInput').value.trim();
    if (usernameInput !== '') {
        setCookie('username', usernameInput, 7); // Set cookie with name "username" lasting 7 days
        alert(`Username "${usernameInput}" has been set in the cookie.`);
    } else {
        alert('Please enter a valid username.');
    }
}

// Function to retrieve and display the username from the cookie
function getUsername() {
    const username = getCookie('username');
    if (username !== '') {
        document.getElementById('usernameDisplay').textContent = `Current Username: ${username}`;
    } else {
        alert('Username cookie not found.');
    }
}

// Function to delete the username cookie
function deleteUsername() {
    deleteCookie('username');
    document.getElementById('usernameDisplay').textContent = 'Username deleted.';
    alert('Username cookie has been deleted.');
}