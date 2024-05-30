function onSignIn(googleUser) {
    // Retrieve user information
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send this directly to your server!
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    // You can perform further actions like sending the user data to your server or redirecting the user
}

const form = document.getElementById('signupForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let mobile = document.getElementById('mobile').value;

    if (email && password && mobile) {
        window.location.href = '/games.html';
    }
    else {
        alert('please fill the all details');
    }
})
