// Array of special characters to be included in password - Array 1

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

// Array of numeric characters to be included in password - Array 2
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password - Array 3
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

// Array of uppercase characters to be included in password - Array 4
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

var numOfCharacters;
var includeSpecial;
var includeNumeric;
var includeLower;
var includeUpper;
var randomCharacter;
var randomPassword = [];
var randomChoice;
var arrayToInclude = [];
var randomNum;
arrayofCharacters = [];
//var numTest;
numberArray = [];
onlyNumbers = [];
var isNaNPresent;


//call the getPasswordOptions() function for testing
//getPasswordOptions()

function getPasswordOptions() {
  //ensure the arrayToInclude and numberArray is empty from previous data
  arrayToInclude=[];
  numberArray=[];
  isNaNPresent = false;
  numOfCharacters = prompt("How many characters would you like your password to contain?");

  arrayofCharacters = numOfCharacters.split("");
  //console.log(arrayofCharacters);
//-----------------------------------------------------
//convert the string data to numbers where possible. Non numbers become NAN
  

for (let i = 0; i < arrayofCharacters.length; i++)
     numberArray.push(parseInt(arrayofCharacters[i]));

 // Print the array of numbers
//console.log(numberArray);


//Are there any instances of NaN indicating Not a Number?
isNaNPresent = numberArray.includes(NaN)
//console.log(isNaNPresent)


if (isNaNPresent === true) {
  alert("You must choose a number");
  numOfCharacters = prompt("How many characters would you like your password to contain?");
}

// ------------------------------------------


  while (numOfCharacters < 8 || numOfCharacters > 128 ) {
  
    if(numOfCharacters<8){
       alert("Your password must contain at least 8 characters")
       numOfCharacters = prompt("How many characters would you like your password to contain?");
      }
    else if(numOfCharacters>128){
       alert ("Your password cannot contain more than 128 characters")
       numOfCharacters = prompt("How many characters would you like your password to contain?");
     }
   }
   
//alert if not number characters

  includeSpecial = confirm("Click OK to include special characters")
//console.log(includeSpecial)
    if (includeSpecial === true) {
      arrayToInclude.unshift(1);
    // console.log(arrayToInclude);
    }
   //curly bracket removed from here
   includeNumeric = confirm("Click OK to include numeric characters");
    if (includeNumeric === true) {
      arrayToInclude.unshift(2);
    // console.log(arrayToInclude);
     }
   includeLower = confirm("Click OK to include lowercase characters");
    if (includeLower === true) {
      arrayToInclude.unshift(3);
    // console.log(arrayToInclude);
     }
    includeUpper = confirm("Click OK to include uppercase characters");
    if (includeUpper === true) {
      arrayToInclude.unshift(4);
      //console.log(arrayToInclude);
     }
     if (arrayToInclude.length === 0) {
      //alert if no groups of characters chosen
      alert("You must choose at least one group of characters")
      getPasswordOptions()
     }
//alert if user does not choose any characters
//end of getPasswordOptions function
}
//console.log(arrayToInclude)



// Function for getting a random element from an array
    function getRandom() {
      //clear randomPassword array to start fresh after function is called
         randomPassword = [];
    for (let m = 0; m < numOfCharacters; m++) {
      randomNum = Math.floor(Math.random() * arrayToInclude.length);
     // console.log(arrayToInclude[randomNum]);
      
      if (arrayToInclude[randomNum] ==1 ) {
          randomCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]; 
           //console.log(randomCharacter)
           randomPassword = randomPassword + randomCharacter;
          }
      else if (arrayToInclude[randomNum] ==2 ) {
         randomCharacter = numericCharacters[Math.floor(Math.random() * numericCharacters.length)]; 
         //console.log(randomCharacter)
         randomPassword = randomPassword + randomCharacter;
         }
      else if  (arrayToInclude[randomNum] ==3 ){
         randomCharacter = lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)]; 
         //console.log(randomCharacter)
         randomPassword = randomPassword + randomCharacter;
         }
       else if (arrayToInclude[randomNum] ==4 ){
         randomCharacter = upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)]; 
         // console.log(randomCharacter)
         randomPassword = randomPassword + randomCharacter;
        }        
      }
        // console.log(randomPassword);
    }




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions()
  getRandom()

  //var password = getRandom();
  var passwordText = document.querySelector('#password');

  passwordText.value = randomPassword;
}


// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
