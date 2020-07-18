// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
    
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// first prompt length of password

// second prompt what characters to include

// third prompt is an alert validating what person has chosen

// when they validate the alert which would be a boolean t/f the pw is generated 