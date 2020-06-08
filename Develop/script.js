// Assignment code here
// For each password length, function choose characters randomly( randomCharacter)from Arrays and add to === Password length and return... 


var generateBtn = document.querySelector("#generate");
// Lowercase Array 
var lowerCaseArray = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o"];
// Numeric Array 
var numberArray = [1, 2, 3, 4, 5, 6, 7];
// Special Character Array - assign numbers to characters using parseInt and const declaration to variable identifier so it cannot be re-assigned 
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Uppercase Array
var upperCaseArray = ["A", "B", "C"];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // if else: if yes run function to choose random lowercase letters and store in "possible" array...
  // else go to next window.confirm...same for all window confirms...


  var passwordLength = parseInt(window.prompt("How long do you want your password to be "));
  var hasUppercase = window.confirm("do you want an uppercase letter?");
  var hasNumber = window.confirm("do you want a number?");
  var hasSpecialcharacter = window.confirm("do you want special character?");
  var hasLowercase = window.confirm("do you want lowercase?");
  

  if (hasLowercase === false && hasUppercase === false && hasSpecialcharacter === false && hasNumber === false) {
    window.alert(" You must choose an option !");
    writePassword();
  }

  if (passwordLength < 8) {
    window.alert("password length must be 8 characters");

  }

  if (passwordLength > 128) {
    window.alert("password length must be 128 characters");
  }

  var userCharsetArray = [];
  

  if (hasUppercase) {
    userCharsetArray.push(upperCaseArray)
  }

  if (hasLowercase) {
    userCharsetArray.push(lowerCaseArray)
  }

  if (hasNumber) {
    userCharsetArray.push(numberArray)
  }

  if(hasSpecialcharacter) {
    userCharsetArray.push(specialCharacterArray)
  }

  var password =""; //Set Password equal to a string
 
  for (i = 0 ; i < passwordLength; i++) {      // for loop for random math objects to iterate same length of password 
       var randomNumber = Math.floor(Math.random() *userCharsetArray.length);
       var randomArrayElement = userCharsetArray[randomNumber];  
       
       var n = Math.floor(Math.random()* randomArrayElement.length);
       var nElement = randomArrayElement[n];     
      
        password += nElement                    // password set equal "+=" password = password + nElement --> so after each iteration nElment was added to itself password length amount of times... pass
  }

     console.log(password);
     var passwordText = document.querySelector("#password");
     passwordText.value = password;
}



generateBtn.addEventListener("click", writePassword);

