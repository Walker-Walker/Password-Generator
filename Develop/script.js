// Assignment code here
// For each password length, function choose characters randomly( randomCharacter)from Arrays and add to === Password length and return... 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Lowercase Array 
var lowerCaseArray = ["a", "b", "c"];
// Numeric Array 
var numberArray = [1, 2, 3, 4, 5, 6 ,7];
// Special Character Array - assign numbers to characters using parseInt and const declaration to variable identifier so it cannot be re-assigned 
var specialCharacterArray = ["!", "@","#","$","%","^","&","*","(",")"];

// Uppercase Array
var upperCaseArray = ["A", "B", "C"];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
    // if else: if yes run function to choose random lowercase letters and store in "possible" array...
  // else go to next window.confirm...same for all window confirms...
  var hasLowercase = window.confirm("do you want lowercase?");
  if (hasLowercase) {
    getRandomNumber(lowerCaseArray)
  }
  var hasSpecialcharacter = window.confirm("do you want special character?");
  if (hasSpecialcharacter) {
    getRandomNumber(specialCharacterArray)
  }
  var hasNumber = window.confirm ("do you want a number?");
  if (hasNumber) {
    getRandomNumber(numberArray)
  } 
  var hasUppercase = window.confirm("do you want an uppercase letter?");
  if (hasUppercase) {
    getRandomNumber(upperCaseArray)
  }
  var passwordText = document.querySelector("#password");

  var passwordLength = parseInt(window.prompt("How long do you want your password to be "));
  console.log(passwordLength);
  if (passwordLength < 8) {
    window.alert("password length must be 8 characters");

  }

  if (passwordLength > 128) {
    window.alert("password length must be 128 characters");
  }

 
 
 
//   if (passwordLength > 8 || passwordLength < 129) {
//     //use Mathfloor and Mathrandom to randomly choose characters/ or generate random numeric value that is associated with a character in an array ( math floor rounds math random to whole number mathrandom * 10 creates values from 0 to 9.xx the + 128 will at least give me values to 128 if number is 0)
    
//     for (var i = 0; i < passwordLength; i++) {
      
    
//     for (var i = 0; i < 1; i++) {
     
//     var randomUpperCaseChoice = Math.floor(Math.random() * upperCaseArray.length);
//     var choiceUpperCase = upperCaseArray[randomUpperCaseChoice] 
    
//   }
    
//     for (var i = 0; i < 1; i++) {
//       var randomLowerCaseChoice = Math.floor(Math.random() * lowerCaseArray.length);
//       var choiceLowerCase = lowerCaseArray[randomLowerCaseChoice]
//       console.log(choiceLowerCase)

//     }
      
   
//     for ( var i = 0; i < 1; i++) {
//       var randomNumberChoice = Math.floor(Math.random() * NumberArray.length);
//       var choiceNumber = numberArray[randomNumberChoice]
//       console.log(choiceNumber)

//     }
    

//     for (var i = 0; i < 1; i++) {
//       var randomCharacterChoice = Math.floor(Math.random() * specialcharacterArray.length);
//       var choiceCharacter = specialcharacterArray[randomCharacterChoice]
//       console.log(choiceCharacter)
//     }
  
//   break;
  
//     }

    
    

// }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//New Proposed layout...
//activate 1-4 of array functions based on user selection criteria to store random number selctions to empty arrays. if statement returns true then run following get random number function for "array"
//Length of Password Function and options...
var userSelection = {
  length: passwordLength,
  hasLowercase,
  hasNumber,
  hasSpecialcharacter,
  hasUppercase
}



//functions for Random number
function getRandomNumber (lowerCaseArray) {
  var randomIndex = Math.floor(Math.random()* lowerCaseArray.length);
  var randomElement = LowerCaseArray[randomIndex]
  return randomElement;

}

function getRandomNumber (upperCaseArray) {
  var randomIndex = Math.floor(Math.random()* upperCaseArray.length);
  var randomElement = upperCaseArray[randomIndex]
  return randomElement;

}
function getRandomNumber (numberArray) {
  var randomIndex = Math.floor(Math.random()* numberArray.length);
  var randomElement = numberArray[randomIndex]
  return randomElement;

}
function getRandomNumber (specialCharacterArray) {
  var randomIndex = Math.floor(Math.random()* specialCharacterArray.length);
  var randomElement = specialCharacterArray[randomIndex]
  return randomElement;

}


var resultPassword = []; 

var possiblePassword = [];

var guaranteedPassword = [];

passwordText.value = [guaranteedPassword];


//Uppercase 
if (userSelection.hasUppercase) {
   possiblePassword = possiblePassword.concat(upperCaseArray);
   guaranteedPassword.push(getRandomNumber(upperCaseArray));
}
for (let i = 0; i < guaranteedPassword.length; i++) {
  resultPassword[i] = guaranteedPassword[i];
}
//Number 
if (userSelection.hasNumber) {
  possiblePassword = possiblePassword.concat(numberArray);
  guaranteedPassword.push(getRandomNumber(numberArray));
}
for (let i = 0; i < guaranteedPassword.length; i++) {
 resultPassword[i] = guaranteedPassword[i];
}

//LowerCase
 if (userSelection.hasLowercase) {
  possiblePassword = possiblePassword.concat(lowerCaseArray);
  guaranteedPassword.push(getRandomNumber(lowerCaseArray));
}
for (let i = 0; i < guaranteedPassword.length; i++) {
 resultPassword[i] = guaranteedPassword[i];
}
//Specialcharacter
 if (userSelection.hasSpecialcharacter) {
  possiblePassword = possiblePassword.concat(specialCharacterArray);
  guaranteedPassword.push(getRandomNumber(specialCharacterArray));
}
for (let i = 0; i < guaranteedPassword.length; i++) {
 resultPassword[i] = guaranteedPassword[i];
}




 //Learning Assistant psuedocode...
//lenght of pass
//options
const useroptions = {
  lenght: passwordLength,
  hasSpecialcharacter: hasSpecialcharacter,

}

// sepaerate function for rand number
function getRandomNum(array) {
  var randomIdex = Math.floor(Math.random() * array.lenght);
  var randElement = array[randomIdex];
  return randElement;
}



var resultPassword = []; // -> get random 5 elements from possible number array

var possible = []; //-> all 3 array elements

var guaranteed = []; //-> 3 elements 1 special character, 1 number and 1 lower 
//pass lenght  -5
//special
//number
//lower case letter

if(useroptions.hasSpecialcharacter) {
  possible = possible.concat(characterArray);
  guaranteed.push(getRandomNum(characterArray));
}
for (let i = 0; i < guaranteed.length; i++) {
 resultPassword[i] = guaranteed[i];
}



// function generatePassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }