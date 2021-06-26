// Assignment Code vvvvvvv
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
//Assignment code ^^^^^^^^

//My code

//Variables

var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var numberchars = "1234567890";
var symbolChars = "!@#$%^&*()";
var passwd = '';

//Ask the user what types of characters they want their password to include
function askParameters() {
  //asking if they want lowercase letters
  var lowercase = window.confirm("Would you like to add lowercase letters?");
    console.log("lowercase is: " + lowercase)

  //asking if they want uppercase letters
  var uppercase = window.confirm("Would you like to add uppercase letter?");
    console.log("uppercase is: " + uppercase);
  //asking if they want numbers
  var numbrs = window.confirm("Would you like to add numbers?");
    console.log("numbers is: " + numbrs);
  //asking if they want special characters
  var specialChars = window.confirm("Would you like to add special characters?")
    console.log("special characters is: " + specialChars);
  //asking the user how long they want their password to be
  var length = window.prompt("How long would you like your password to be? (8-128)")
    if (length > 8 && length <128) {
      console.log("password length is: " + length);
    } else {  //giving the user a warning if they do not chose between 8-128 characters
      window.alert("your passwords needs to be between 8 and 128 characters long")
      return
    }
    
}
  //code to generate the password

  function generatePassword() {
    askParameters();
  } 

  
  generate.addEventListener("click", function(e) {

    var characters = null;

    if (lowercase === true) {
      characters.concat(lowercaseChars)
    }

    passwd.value = passwordGen(length.value, characters)

  });

    
    
    
   
    
    //code to generate the password
  function passwordGen(passLength, characters) {
    var pass = '';

    for (var i = 0; i<passLength; i++) {
        pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pass
  }

    console.log(passwd);