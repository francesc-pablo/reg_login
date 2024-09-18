// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// select form by id
const loginForm = document.querySelector('#login-form');
// handle form submit event
loginForm.addEventListener('submit', function (event){
    event.preventDefault();
    // collect form data
    const loginData = new FormData(loginForm);
    console.log(
        loginData.get('uname'),                                         
        loginData.get('psw')
    );
    // display success message
    const messageH1 = document.querySelector('#message')
    messageH1.textContent = 'You have logged in Successfully!';
});