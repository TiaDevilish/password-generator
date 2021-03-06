// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if(password) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//prompt for lenght of char
var length = prompt("Please, enter the desired lenght of characters for your password, between 8 and 128.");

for (var i = length; i <= 8 || i >= 128; length = prompt("Please, enter the desired lenght of characters for your password, between 8 and 128.")) {
  console.log(i);

  if (length < 8 || length > 128) {
    alert("The length of your password should be between 8 and 128 characters!");
  }
  else if (length >= 8 && length <= 128){
    break;
  }
}

//confirms for password choises
var lowerCase = confirm("Would you like to include lower case characters?");
var upperCase = confirm("Would you like to include upper case characters?");
var numbers = confirm("Would you like to include numbers?");
var specialChar = confirm("Would you like to include special characters?");
//if nothing was selected
while (!lowerCase && !upperCase && !numbers && !specialChar) {
  alert("You have to choose at least one type of character to generate a password! \n Please, try again!")
  lowerCase = confirm("Would you like to include lower case characters?");
  upperCase = confirm("Would you like to include upper case characters?");
  numbers = confirm("Would you like to include numbers?");
  specialChar = confirm("Would you like to include special characters?");
}

//vars with chars in str
var lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbersStr = "1234567890";
var specialCharStr = "~!@#$%^&*()_+}{][:;?";
var charArray = [];
var characters = "";
var password = "";
var guaranteedArray = [];

  //if  true, then add str to arr
  if (lowerCase){
    characters += lowerCaseStr;
    guaranteedArray.push(lowerCaseStr[Math.floor(Math.random() * lowerCaseStr.length)])
  }
    if (upperCase){
    characters += upperCaseStr;
    guaranteedArray.push(upperCaseStr[Math.floor(Math.random() * upperCaseStr.length)])
  }
  if (numbers){
    characters += numbersStr;
    guaranteedArray.push(numbersStr[Math.floor(Math.random() * numbersStr.length)])
  }
  if (specialChar){
    characters += specialCharStr;
    guaranteedArray.push(specialCharStr[Math.floor(Math.random() * specialCharStr.length)])
  }
 
  charArray = characters.split("");
  
  for (var i = 0; i < length; i ++) {
    var chosenEl = charArray[Math.floor(Math.random() * charArray.length)];
    password += chosenEl;
  }
  //guaranteed characters
  var passwordArray = password.split("");
  for (var i = 0; i < guaranteedArray.length; i ++) {
    passwordArray[i]=guaranteedArray[i]
  }
  var finalPassword = passwordArray.join('');
  return finalPassword;
}


