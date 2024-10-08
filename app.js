let passwordinput = document.getElementById("passwordinput")
let copy = document.getElementById("copy")
let generatepass = document.getElementById("generatepass")


function generatepassword() {
    let length = 12;
    let char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+'
    let password = '';
    for (let i = 0; i < length; i++){
        password += char.charAt(Math.floor(Math.random()* char.length))
    }
    passwordinput.value = password;
}
generatepass.addEventListener("click", generatepassword);

copy.addEventListener("click", () =>
{
    passwordinput.select()
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
)