//-------------- DOM element.................
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("submit");

// reGex
const is_email = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/  //email validation js reGex
const is_correct_pass = /[a-zA-Z0-9]{8}/ //reGex for password validation

// lets move submit button.....................

button.addEventListener('mouseover', function(){
    const is_valid = is_email.test(email.value) && is_correct_pass.test(password.value) && name.value.length > 2;

    if(!is_valid){
        this.classList.toggle("move");
    }
})