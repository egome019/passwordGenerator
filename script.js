// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // these are the character arrays //
  var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var num = "1234567890".split("");
  var spec = "!@#$%^&*()_+".split("");

  var pw = "";

  // these are the prompts for the user //
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Must choose between 8-128 characters.")
      passwordLength.preventDefault()
    }
  
  
    spChar = confirm("Do you want to include special characters?")
    numChar = confirm("Do you want to include numeric characters?")
    lowChar = confirm("Do you want to include lowercase characters?")
    upChar = confirm("Do you want to include uppercase characters?")
  
  // var characters = [spChar, numChar, lowChar, upChar]
  //   console.log(characters)
 
  
  // this is the array of password characters //
  for (var i = 0; i < passwordLength; i++) {
    var charSet = [];
    
    if (spChar == true) {
      var symbols = spec[Math.floor(Math.random() * spec.length)];
      charSet.push(symbols);
    } console.log(symbols)
    if (numChar == true) {
      var numbers = num[Math.floor(Math.random() * num.length)];
      charSet.push(numbers);
    } console.log(numbers)
    if (lowChar == true) {
      var lowerCase = alpha[Math.floor(Math.random() * alpha.length)];
      charSet.push(lowerCase);
    } console.log(lowerCase)
    if (upChar == true) {
      var upperCase = caps[Math.floor(Math.random() * caps.length)];
      charSet.push(upperCase);
    } console.log(upperCase)
    console.log(charSet)
    var char = charSet[Math.floor(Math.random() * charSet.length)];
    console.log(char)
    pw += char;

  }

  return pw;

  
}
 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

