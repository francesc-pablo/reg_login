// Select form by id
const registerForm = document.querySelector('#register-form');
// console.log(registerForm)
// Handle form submit event
registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect form data
    const formData = new FormData(registerForm);
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    // save user information
    // send a confirmation email
    // display success message
    const messageH1 = document.querySelector('#message')
    messageH1.textContent = 'Account Registered Successfully!';
});

// age variable
const age = 44;
// square of age
function squareAge(age) {
    const squaredAge = age ** 2;
    return squaredAge;
}

const squaredAge = squareAge(45) 
// console.log(squaredAge);