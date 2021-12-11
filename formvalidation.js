function validate_phone_number()
{
    var user = document.getElementById("mobileno").value;
    var reg1=/^(\+91)?[6|7|8|9][0-9]{9}$/;
    if(reg1.test(user))
    {
        var user2 = document.getElementById("mobileno");
        user2.style.border = "green solid 3px"
        document.getElementById("mobile").innerHTML = "Mobile No ✅";
    }
    else
    {
        var user2 = document.getElementById("mobileno");
        user2.style.border = "red solid 3px"
        document.getElementById("mobile").innerHTML = "Mobile No ❌";
    }
}
function validateUserId(){
    var user = document.getElementById("userid").value;
    var reg=/^[A-Za-z][A-Za-z0-9]{3,10}$/;
    if(reg.test(user))
    {
        var user2 = document.getElementById("userid");
        user2.style.border = "green solid 3px"
        document.getElementById("user").innerHTML = "User ID ✅";
    }
    else
    {
        var user2 = document.getElementById("userid");
        user2.style.border = "red solid 3px"
        document.getElementById("user").innerHTML = "User ID ❌";
    }
}

function validateEmailID(){
    var user = document.getElementById("email").value;
    var reg=/^[a-z][a-z0-9]{3,30}@[a-z]{3,10}[.][a-z+.]{2,10}$/;
    if(reg.test(user))
    {
        var user2 = document.getElementById("email");
        user2.style.border = "green solid 3px"
        document.getElementById("email1").innerHTML = "Email ID ✅";
    }
    else
    {
        var user2 = document.getElementById("email");
        user2.style.border = "red solid 3px"
        document.getElementById("email1").innerHTML = "Email ID ❌";
    }
}

function passwordmatch(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;

    if(pass1==pass2)
    {
        console.log("Passwords match!!!!");
    }
    else{
        alert("Passwords do not match !! Please enter password again ");
    }
}

function PasswordStrength(){
    var user = document.getElementById("pass1").value;
    var sreg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mreg = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    if(sreg.test(user)){
        document.getElementById("strength").innerHTML = '<span style="color:red;">Weak</span>';
    }
    else if(mreg.test(user)){
        document.getElementById("strength").innerHTML = '<span style="color:yellow;">Medium</span>';
    }
    else{
        document.getElementById("strength").innerHTML = '<span style="color:green;">Strong</span>';
    }
}