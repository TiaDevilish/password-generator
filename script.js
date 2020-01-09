// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

//Prompts and confirms (FIGURE OUT THE PROMPT IF CANCEL WAS SELECTED!!!!!)
var length = prompt("Please, enter the desired lenght of characters for your password, between 8 and 128.");
var lowerCase = prompt("Would you like to include lower case characters?");
var upperCase = prompt("Would you like to include upper case characters?");
var numbers = prompt("Would you like to include numbers?");
var specialChar = confirm("Would you like to include special characters?");
