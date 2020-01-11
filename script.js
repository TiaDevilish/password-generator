// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//prompt for lenght of char
var length = prompt("Please, enter the desired lenght of characters for your password, between 8 and 128.");

  if (length < 8 || length > 128) {
    alert("The length of your password should be between 8 and 128 characters!");
  }
  else if (length >= 8 && length <= 128){
    break;
  }
}

//confirsm for password choises
var lowerCase = confirm("Would you like to include lower case characters?");
var upperCase = confirm("Would you like to include upper case characters?");
var numbers = confirm("Would you like to include numbers?");
var specialChar = confirm("Would you like to include special characters?");
//if nothing was selected
while (!lowerCase && !upperCase && !numbers && !specialChar) {
  alert("You have to select at least one character type!")
  lowerCase = confirm("Would you like to include lower case characters?");
  upperCase = confirm("Would you like to include upper case characters?");
  numbers = confirm("Would you like to include numbers?");
  specialChar = confirm("Would you like to include special characters?");
}
}