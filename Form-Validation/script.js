
var NameError = document.getElementById("name-error");
var PhoneError = document.getElementById("phone-error");
var EmailError = document.getElementById("email-error");
var MessegeError = document.getElementById("messege-error");
var SubmitError = document.getElementById("submit-error");

function NameHandler(){
    var Name = document.getElementById("name").value;
    var regex = /^[a-zA-Z ]{2,30}$/;
    if(Name.length==0){
        NameError.style.color = "red";
        NameError.innerHTML="required field"
        return false;
    }
    if(!Name.match(regex)){
        NameError.style.color = "red";
        NameError.innerHTML="Write full name";
        return false;
    }
    NameError.innerHTML="Fine";
    NameError.style.color = "green";
    return true;
}

function PhoneHandler(){
    var Phone = document.getElementById("phone").value;
    console.log(Phone);
    if(Phone.length==0){
        PhoneError.style.color = "red";
        NameError.innerHTML="required field"
        return false;
    }
    if(!Phone.match(/^[0-9]{10}$/)){
        PhoneError.style.color = "red";
        PhoneError.innerHTML="Only digit Please!";
        return false;
    }
    PhoneError.innerHTML="Fine";
    PhoneError.style.color = "green";
    return true;
}

function EmailHandler(){
    var Email = document.getElementById("email").value;
    var Eregex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    console.log(Email);
    if(Email.length==0){
        EmailError.style.color = "red";
        EmailError.innerHTML="required field";
        return false;
    }
    if(!Email.match(Eregex)){
        EmailError.style.color = "red";
        EmailError.innerHTML="Email is required";
        return false;
    }
    EmailError.innerHTML="Fine";
    EmailError.style.color = "green";
    return true;
}

function MessegeHandler(){
    var Messege = document.getElementById("messege").value;
    var required = 30;
    var left = required - Messege.length;
    if(Messege.length==0){
        MessegeError.style.color = "red";
        MessegeError.innerHTML="required field"
        return false;
    }
    if(left>0){
        MessegeError.style.color = "red";
        MessegeError.innerHTML = left+"more carecters required";
        return false;
    }
    MessegeError.innerHTML="Fine";
    MessegeError.style.color = "green";
    return true;
}

function ValidateForm(){
    if(!MessegeHandler() || !EmailHandler() || !PhoneHandler() || !NameHandler()){
        SubmitError.innerHTML = "Please fix the issue";
        return false;
    }
    console.log(MessegeHandler());
    console.log(EmailHandler());
    console.log(PhoneHandler());
    console.log(NameHandler());
}

