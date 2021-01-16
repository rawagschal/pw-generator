// Assignment code here

// input vars

  var lowercase = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z';
  var lowercaseArray = lowercase.split(',');

  var uppercase = lowercase.toUpperCase();
  var uppercaseArray = uppercase.split(',');
  
  var numbers = '1,2,3,4,5,6,7,8,9,0';
  var numbersArray = numbers.split(',');

  var specialChars = '!,@,#,$,%,^,&,*,(,),-,_,+,.,{,},~,`,?,/,|,=,<,>';
  var specialCharsArray = specialChars.split(',')

// generate pw function
function generatePassword() {
  var selectedChars = [];

  // use parseInt to parse the string input for pw length to an integer
  var pwLength = parseInt(window.prompt("Please enter a desired password length between 8 and 128."));
  
  // check pwLength entry
  if (pwLength < 8 || pwLength > 128 || !pwLength){
    window.alert("You must enter a number between 8 and 128");
    // generates in the #password element
    return "Click 'Generate Password' to try again";
  } else {
    var useLowercase = window.confirm("Would you like to include lowercase letters in your password? Click 'ok' for yes, 'cancel' for no.");
    var useUppercase = window.confirm("Would you like to include uppercase letters in your password? Click 'ok' for yes, 'cancel' for no.");
    var useNumbers = window.confirm("Would you like to include numbers in your password? Click 'ok' for yes, 'cancel' for no.");
    var useSpecial = window.confirm("Would you like to include special characters in your password? Click 'ok' for yes, 'cancel' for no.");
  }

  // check selected inputs 
  if (!useLowercase && !useUppercase && !useNumbers && !useSpecial) {
    window.alert("You must select 'ok' for at least one option.");
    return "Click 'Generate Password' to try again";
  } else {
    // push each selected input to selectedChars array
    if (useLowercase === true) {
      selectedChars.push(lowercaseArray);
    }
    if (useUppercase === true) {
      selectedChars.push(uppercaseArray);
    }
    if (useNumbers === true) {
      selectedChars.push(numbersArray);
    }
    if (useSpecial === true) {
      selectedChars.push(specialCharsArray);
    }
  }
  // combine the selectedChars array of arrays into a single possibleChars array
  var possibleChars = selectedChars.flat();

  // empty results array for random characters to be pushed to
  var results = [];

  // randomly select characters for the user input pwLength # of times 
  for (i = 1; i < pwLength + 1; i++) {
    var randomIndex = Math.floor(Math.random() * possibleChars.length);
    var randomChar = possibleChars[randomIndex];
    results.push(randomChar);
  }
  
  // concatenate results into single string
  var password = results.join("");
  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
