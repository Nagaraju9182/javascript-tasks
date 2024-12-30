const username = document.getElementById('name');
const emailid=document.getElementById('email');
const userpassword=document.getElementById('password');
const form=document.getElementById('form');

const nameerror=document.getElementById('name-error');
const emailerror=document.getElementById('email-error');
const passworderror=document.getElementById('password-error');

username.addEventListener('input', () => {
nameerror.innerHTML = '';
});

form.addEventListener('submit',(e)=>{
var emailcheck=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(name.value===''||name.value==null){
    e.preventDefault();
    nameerror.innerHTML="Name is required";
}
else{
    nameerror.innerHTML="";
}

if(!email.value.match(emailcheck)){
    e.preventDefault();
    emailerror.innerHTML="Valid Email is required";
}
else{
    emailerror.innerHTML="";
}


if(password.value.length<=5){
    e.preventDefault();
    passworderror.innerHTML="Password must be more than 6 charcters";
}
else{
    passworderror.innerHTML="";
}


if(password.value.length>=10){
    e.preventDefault();
    passworderror.innerHTML="Password cannot be more than 10 charcters";
}
if(password.value==='password'){
    e.preventDefault();
    passworderror.innerHTML="Password cannot be password";
}




})