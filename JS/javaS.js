//Slava Ignatiev 322015280  Yagel Atias 208905448
// JavaScript for Mitzy-Net Website

// Event listener for button click
document.querySelector('.button').addEventListener('click', function(){

    // Variable initialization to track email and password validity
    let mail = false;
    let psw = false;

    // Checks the validity of the email
    let name = document.getElementById('mail');
    if(name.value.trim() == '') {
        // If email is empty, display error and mark as invalid
        name.style.border = '2px solid red';
        document.getElementById('email-error-one').style.display = 'flex';
        document.getElementById('email-error-two').style.display = 'none';
        mail = false;
    } else if(validateEmail(name.value) !== true) {
        // If email is not in valid format, display error and mark as invalid
        name.style.border = '2px solid red';
        document.getElementById('email-error-two').style.display = 'flex';
        document.getElementById('email-error-one').style.display = 'none';
        mail = false;
    } else {
        // If email is valid, mark as valid
        document.getElementById('email-error-one').style.display = 'none';
        document.getElementById('email-error-two').style.display = 'none';
        name.style.border = 'none';
        mail = true;
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
        return emailRegex.test(email);
    }

    // Checks the validity of the password
    let psw1 = document.getElementById('psw1');
    let psw2 = document.getElementById('psw2');
    if(psw1.value.trim() == '' || psw2.value.trim() == '' || psw1.value.length < 8) {
        // If password is empty or less than 8 characters, display error and mark as invalid
        document.getElementById('error_msg_two').style.display = 'none';
        document.getElementById('error_msg_one').style.display = 'flex';
        psw1.style.border = '2px solid red';
        psw2.style.border = '2px solid red';
        psw = false;
    } else if(psw1.value === psw2.value) {
        // If passwords match, mark as valid
        psw = true;
        document.getElementById('error_msg_one').style.display = 'none';
        document.getElementById('error_msg_two').style.display = 'none';
        psw1.style.border = '';
        psw2.style.border = '';
    } else {
        // If passwords don't match, display error and mark as invalid
        document.getElementById('error_msg_one').style.display = 'none';
        document.getElementById('error_msg_two').style.display = 'flex';
        psw1.style.border = '2px solid red';
        psw2.style.border = '2px solid red';  
    }

    // If both email and password are valid, hide input fields and display success message
    if(mail === true && psw === true) {
        document.getElementById('end').style.display = 'flex';
        document.querySelector('.cadentials_row').style.display = 'none';
        document.querySelector('.cadentials_column').style.display = 'none';
        document.querySelector('.button').style.display = 'none';
        document.querySelector('.reg-sub-header').style.display = 'none';
    }
});