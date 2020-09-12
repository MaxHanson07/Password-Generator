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

// Variables storing values based on user response. Booleans are marked false until user confirms them true
var passwordLength
var hasLowercase = false;
var hasUppercase = false;
var hasNumber = false;
var hasSpecial = false;

function generatePassword() {

  // Get desired password details from user
  passwordLength = getLength();
  getCriteria();

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
  password = randomizePassword(chosenChar);

  return password;
}

// Gets desired password length from user
function getLength() {
  // Create prompt to ask user how long they want password
  passwordLength = prompt("How many characters would you like your password to be?");

  // Validates that password is adequate length
  if ((passwordLength < 8) || (passwordLength > 128)) {
    var longEnough = false;
  }

  // Requires user to choose new length until meeting requirements
  while (longEnough === false) {
    passwordLength = prompt("Password must be no less than 8 characters and no more than 128 characters");

    if ((passwordLength >= 8) && (passwordLength <= 128)) {
      longEnough = true;
    }
  }

  return passwordLength;
}

// Gets desired character type criteria from user
function getCriteria() {

  // Local variable holds boolean indicating whether user has provided adequate password criteria
  var enoughInfo = false;

  // While loop validates user's answers. Password must include at least 1 type of characters
  while (enoughInfo === false) {

    // Create Confirm to ask user if they want lowercase
    hasLowercase = confirm("Do you want your password to include lowercase characters?");

    // Create Confirm to ask user if they want uppercase
    hasUppercase = confirm("Do you want your password to include UPPERCASE characters?");

    // Create Confirm to ask user if they want numbers
    hasNumber = confirm("Do you want your password to include numbers?");

    // Create Confirm to ask user if they want special characters
    hasSpecial = confirm("Do you want your password to include special characters?");

    // Stops while loop once password length is adequate and at least one character type is selected
    if (hasLowercase || hasUppercase || hasNumber || hasSpecial) {
      enoughInfo = true;
    }
    else {
      // Tell user they need to choose at least 1 type of characters
      alert("Password must include at least 1 type of characters");
    }
  }
}

// Create function that adds selected arrays into array of all chosen characters instead of an array of arrays
function contentsToNewArray(selectedArray, newArray) {
  for (var i of selectedArray) {
    newArray.push(i);
  }
}

// Randomly orders characters based on the specified parameters provided by user
function randomizePassword(criteria) {
  // Create array to hold the characters of the user's generated password
  var finalPasswordArray = [];

  //  Use Math.floor(Math.random()) to get a random number to choose a random character from chosenChar array
  //  Use for loop that iterates the same amount as user's specified password length
  for (var j = 0; j < passwordLength; j++) {
    var randomSelection = Math.floor(Math.random() * criteria.length)
    finalPasswordArray.push(criteria[randomSelection]);
  }

  // Converts array of characters into a string to display to user
  return finalPasswordArray.join("");
}