const switchToSignUp = document.getElementById('switchToSignUp');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.querySelector('.login');
const signUpForm = document.querySelector('.signup');

switchToSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signUpForm.classList.remove('hidden');
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});
