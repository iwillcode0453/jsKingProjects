const btnEl = document.getElementById("generate-btn");

btnEl.addEventListener('click', () => {
    createPassword();
})

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";

    for(let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    console.log(password);
    document.getElementById("input").value = password;
    copyPassword();
}

