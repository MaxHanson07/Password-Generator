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






// TODO Add validations to make sure user chose at least one type of character

// TODO Add validation to the length to make sure it is between 8-128 characters



// Create array for each type of character (lowercase, numbers, special, etc.)

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

// Create new var that holds all chosen char (full array)
var chosenChar = [];

function generatePassword() {
  // Create prompt to get password length from user
  var passwordLength = prompt("How many characters would you like your password to be?");

  // // Create Confirm to ask user if they want lowercase
  var hasLowercase = confirm("Do you want your password to include lowercase characters?");

  // // Create Confirm to ask user if they want uppercase
  var hasUppercase = confirm("Do you want your password to include UPPERCASE characters?");

  // // Create Confirm to ask user if they want number
  var hasNumber = confirm("Do you want your password to include numbers?");

  // // Create Confirm to ask user if they want special char
  var hasSpecial = confirm("Do you want your password to include special characters?");

  // TODO Create password with specified criteria



  // Use "if statements" to save chosen characters to the chosen char array

  if (hasLowercase) {
    contentsToNewArray(lowercaseArray, chosenChar);
  }

  if (hasUppercase) {
    contentsToNewArray(uppercaseArray, chosenChar);
  }

  if (hasNumber) {
    contentsToNewArray(numberArray, chosenChar);
  }

  if (hasSpecial) {
    contentsToNewArray(specialArray, chosenChar);
  }

  // Create password based on user's specified criteria

  // Create array to hold the characters of the user's generated password
  var finalPasswordArray = [];

  //  Use Math.floor(Math.random()) to get a random number
  //  Use for loop that iterates the same amount as user's specified password length
  for (var j = 0; j < passwordLength; j++) {
    var randomSelection = Math.floor(Math.random() * chosenChar.length)
    finalPasswordArray.push(chosenChar[randomSelection]);
  }

  // Converts array of characters into a string to display to user
  password = finalPasswordArray.join("");

  console.log(password);

  return password;

}

// Create function that adds selected arrays into array of all chosen characters
function contentsToNewArray(selectedArray, newArray) {
  for (var i of selectedArray) {
    newArray.push(i);
  }
}