
let form = document.getElementById("signupForm");

form.addEventListener("submit", submitHandler);

function submitHandler(e) {
    e.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

        if (!firstName || !surname || !email || !password) {
            alert("Please fill all fields!");
            return;
        }

    if (password.length < 8) {
        alert("Password must be at least 8 characters!");
        return;
    }

    let userObj = {
        firstName,
        surname,
        email,
        password
    };

    console.log(userObj);

    alert("User signup successfully!");

    //  FORM RESET (THIS IS THE MAIN ADD)
    form.reset();
}