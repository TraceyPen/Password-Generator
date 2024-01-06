// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var numOfCharacters
var includeSpecial
var includeNumeric
var includeLower
var includeUpper
var allNumbers = [0,1,2,3,4,5,6,7,8,9]

// Function to prompt user for password options
getPasswordOptions()

function getPasswordOptions() {
numOfCharacters = prompt("How many characters would you like your password to contain?");

while (numOfCharacters < 8 || numOfCharacters > 128 ) {
  
  if(numOfCharacters<8){
     alert("Your password must contain at least 8 characters")
     getPasswordOptions()
    }
    else if(numOfCharacters>128){
     alert ("Your password cannot contain more than 128 characters")
     getPasswordOptions()
    }
  }
}

//if number less than 5 alert - "Password length must be at least 8 characters" (no more than 128!)
//alert if empty
includeSpecial = confirm("Click OK to include special characters")
includeNumeric = confirm("Click OK to include numeric characters")
includeLower = confirm("Click OK to include lowercase characters")
includeUpper = confirm("Click OK to include uppercase characters")
//alert if user does not choose any characters

//}
//call the getPasswordOptions() function for testing
getPasswordOptions()


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);