class User {
    constructor(firstname, lastname, username, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.password = password;
    }
}

function register(event) {
    event.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (firstname == "" || lastname == "" || username == "" || password == "") {
        console.log("Please fill out all fields.");
        return;
    }

    let newUser = new User(firstname, lastname, username, password);
    console.log(newUser);
}

function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
        console.log("Please fill out all fields.");
        return;
    }

    let loginUser = {
        username: username,
        password: password
    };
    console.log(loginUser);
}

if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", register);
}

if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", login);
}