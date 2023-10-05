const passwordInput = document.getElementById('password') as HTMLInputElement;
const togglePassword = document.getElementById('togglePassword') as HTMLSpanElement;

togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePassword.innerText = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        togglePassword.innerText = 'Show Password';
    }
});