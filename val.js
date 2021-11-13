 
 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');

 form.addEventListener('submit', (e) => {
     e.preventDefault();

     checkInputs();
 });

 function checkInputs() {
     //getting the values from the inputs//
    const usernameValue = username.value.trim();
    const useremailValue =email.value.trim();
    const userpasswordValue =password.value.trim();
    const userpassword2Value =password2.value.trim();

    if(usernameValue === '') {

        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    //validation for email
    if(useremailValue === '') {

        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(useremailValue)) {
        setErrorFor(email, 'Email is not valid');
    }else {
        setSuccessFor(email);
    }
    //validation for password
    if(userpasswordValue === '') {

        setErrorFor(password, 'Password cannot be blank');
    } else if(userpasswordValue === 'password') {

        setErrorFor(password, 'Password cannot be password');
    }else {
        setSuccessFor(password);
    }
    //validation for second password

    if(userpassword2Value === '') {

        setErrorFor(password2, 'Password confirmation cannot be blank');
    } else if(userpasswordValue !== userpassword2Value) {
        setErrorFor(password2, 'Password does not match');   

    }else {
        setSuccessFor(password2);
    }

 }

 function setErrorFor(input, message){
     const formControl = input.parentElement;
     const small = formControl.querySelector('small');

     small.innerText = message;

     formControl.className = 'form-control error'
 }

 function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
 }

 	
function isEmail(email) {
	return /^(([^<>()\[A-Z\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/.test(email);
}

