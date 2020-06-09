// Assignment code here


var generateBtn = document.querySelector("#generate");
// Lowercase Array 
var lowerCaseArray = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// Numeric Array 
var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
// Special Character Array - assign numbers to characters using parseInt and const declaration to variable identifier so it cannot be re-assigned 
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Uppercase Array
var upperCaseArray = ["A", "B", "C" ,"D", "E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Write password to the #password input
function writePassword() {
// Validation 
  
  var hasUppercase = window.confirm("do you want an uppercase letter?");
  var hasNumber = window.confirm("do you want a number?");
  var hasSpecialcharacter = window.confirm("do you want special characters?");
  var hasLowercase = window.confirm("do you want lowercase?");
  var passwordLength = parseInt(window.prompt("How long do you want your password to be? "));

  
   if (passwordLength < 8) {
    window.alert("password length must be 8 characters");
    return;
  }

  if (passwordLength > 128) {
    window.alert("password length must be 128 characters");
    return;
  }
  
  if (hasLowercase === false && hasUppercase === false && hasSpecialcharacter === false && hasNumber === false) {
    window.alert(" You must choose an option !");
    writePassword();
  }
 
  // End Validation 
 

  var userCharsetArray = []; //Storage for User Selected Arrays chosen in Validation Section
  
  // if statements to select arrays(user selection) and push array to empty userCharsetArray
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

  var password =""; //Set Password equal to an empty string
 
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

