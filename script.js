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




// Create prompt to get password length from user
// var passwordLength = prompt("How many characters would you like your password to be?");

// // Create Confirm to ask user if they want lowercase
// var hasLowercase = confim("Do you want your password to include lowercase characters?");

// // Create Confirm to ask user if they want uppercase
// var hasUppercase = confim("Do you want your password to include UPPERCASE characters?");

// // Create Confirm to ask user if they want number
// var hasNumber = confim("Do you want your password to include numbers?");

// // TODO Create Confirm to ask user if they want special char
// var hasSpecial = confim("Do you want your password to include special characters?");

// TODO Create password with specified criteria

// TODO Create array for each type of character (lowercase, numbers, special, etc.)

// Used to split into array
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberString = "0123456789";
var specialString = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Creates arrays with each character type
var lowercaseArray = lowercaseString.split("");
var uppercaseArray = uppercaseString.split("");
var numberArray = numberString.split("");
var specialArray = specialString.split("");

console.log(uppercaseArray);
console.log(lowercaseArray);
console.log(specialArray);
console.log(numberArray);

// TODO Create new var that holds all chosen char (full array)

// TODO Use "if statement" to save chosen characters to the chosen char array

// TODO Create loop to choose characters that match criteria. Choose as many characters as user's specified password length
//  Use Math.floor(Math.random()) to get a random number
//  Use for loop that iterates the same amount as user's specified password length

// TODO Add validations to make sure user chose at least one type of character

// TODO Add validation to the length to make sure it is between 8-128 characters

