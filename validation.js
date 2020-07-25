function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
function validateForm() {
    // Retrieving the values of form elements 
    var firstname =  document.registerForm.fname.value;
    var lastname =  document.registerForm.lname.value;
    var birth =  document.registerForm.dob.value;
    var email =  document.registerForm.emailAddr.value;
    var password =  document.registerForm.pwd.value;
    var conPassword =  document.registerForm.cpwd.value;
    var mobile =  document.registerForm.mobileno.value;
    var gender =  document.registerForm.genderOp.value;
    
	// Defining error variables with a default value
    var fnameErr = emailErr = mobileErr = genderErr = lnameErr = pwdErr = cpwdErr = dobErr = true;
    
    // Validate name
    if(firstname == "") {
        printError("fnameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z \s]+$/;                
        if(regex.test(firstname) === false) {
            printError("fnameErr", "Please enter a valid first name");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }
    if(lastname == "") {
        printError("lnameErr", "Please enter your last name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(lastname) === false) {
            printError("lnameErr", "Please enter a valid last name");
        } else {
            printError("lnameErr", "");
            lnameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    //Validate Password
    if(password==""){
        printError("pwdErr","Please enter your password");
    }else{
        printError("pwdErr","");
        pwdErr = false;
    }
    //Validate Confirm Password
    if(conPassword==""){
        printError("cpwdErr","Please enter your confirm password");
    }else{
        if(conPassword!=password){
            printError("cpwdErr","Password does not match");
        }else{
            printError("cpwdErr","");
            cpwdErr = false;
        }
    }

    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    //Validate DOB
    var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    if (birth == null || birth == "") {
        printError("dobErr", "Please select your DOB");
    }
    else {
        printError("dobErr", "");
        dobErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if((fnameErr || lnameErr || emailErr || mobileErr || dobErr || genderErr || pwdErr || cpwdErr || agreeErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + firstname +" " + lastname+ "\n" +
                          "Email Address: " + email + "\n" +
                          "DOB : " + birth + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Gender: " + gender + "\n";
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
}