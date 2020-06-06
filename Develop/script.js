// Assignment code here
// For each password length, function choose characters randomly( randomCharacter)from Arrays and add to === Password length and return... 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Lowercase Array 
var lowerCaseArray = ["a", "b", "c"];
// Numeric Array 
var NumberArray = [1, 2, 3, 4];
// Special Character Array - assign numbers to characters using parseInt and const declaration to variable identifier so it cannot be re-assigned 
var characterArray = [];

// Uppercase Array
var upperCaseArray = ["A", "B", "C"];


// For loop to loop through Array of characters returning user choices...such as Number, Lowercase, Uppercase, and special character..





// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var hasLowercase = window.confirm("do you want lowercase?");
  var hasSpecialcharacter = window.confirm("do you want special character?");
  var hasNumber = window.confirm("do you want a number?");
  var hasUppercase = window.confirm("do you want an uppercase letter?");
  var passwordText = document.querySelector("#password");

  var passwordLength = parseInt(window.prompt("How long do you want your password to be "));
  console.log(passwordLength);
  if (passwordLength < 8) {
    window.alert("password length must be 8 characters");

  }

  if (passwordLength > 128) {
    window.alert("password length must be 128 characters");
  }

  if (passwordLength > 8 || passwordLength < 129) {
    //use Mathfloor and Mathrandom to randomly choose characters/ or generate random numeric value that is associated with a character in an array ( math floor rounds math random to whole number mathrandom * 10 creates values from 0 to 9.xx the + 128 will at least give me values to 128 if number is 0)
    
    for (var i = 0; i < passwordLength; i++) {
     
    var charactercomputerChoice = Math.floor(Math.random() * upperCaseArray.length);
    var choice = upperCaseArray[charactercomputerChoice]
    
    console.log(charactercomputerChoice);
    console.log(choice);
    console.log(upperCaseArray);
    passwordText.value = choice;
  
}

}

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

