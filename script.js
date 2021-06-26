var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


//Declaring global variables
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberChars = "1234567890";
var symbolChars = "!@#$%^&*()";

//Ask the user what types of characters they want their password to include
function generatePassword() {

  window.alert("To create a random password, please answer the following prompts. Select 'OK' for yes and 'cancel' for no.")
  //asking the user how long they want their password to be
  var length = window.prompt("How long would you like your password to be? (8-128)")
    if (length > 8 && length <128) {
      console.log("password length is: " + length);
    } 
  //giving the user a error if they do not chose between 8-128 characters 
  if (length < 8 || length > 128) {
    window.alert("Your password needs to be between 8 and 128 characters long")
    return
  }
  //asking if they want lowercase letters
  var incLowerCase = window.confirm("Would you like to add lowercase letters?");
    console.log("lowercase is: " + incLowerCase);

  //asking if they want uppercase letters
  var incUpperCase = window.confirm("Would you like to add uppercase letter?");
    console.log("uppercase is: " + incUpperCase);

  //asking if they want numbers
  var incNumbers = window.confirm("Would you like to add numbers?");
    console.log("numbers is: " + incNumbers);

  //asking if they want special characters
  var incSymbols = window.confirm("Would you like to add special characters?")
    console.log("special characters is: " + incSymbols);
    //giving the user a error if they do not select any options
    if (incLowerCase === false && incUpperCase === false && incNumbers === false && incSymbols === false) {
      window.alert("You must selected at least one option");
      return
    }

  var passResult = '';
  var chosenChars = '';
  
  //adding characters to "chosenChar" string if they were chosen earlier 
  if(incLowerCase) {
    chosenChars += lowercaseChars
  }
  if(incUpperCase) {
    chosenChars += uppercaseChars
  }
  if(incNumbers) {
    chosenChars += numberChars
  }
  if(incSymbols) {
    chosenChars += symbolChars
  }

  console.log("characters chosen are: " + chosenChars)
  
  //generating the password using all above inputed data
  for (var i = 0; i < length; i++) {
    passResult += chosenChars.charAt(Math.floor(Math.random() * chosenChars.length));
  }
  console.log(passResult)
  //returning the result
  return passResult
}

