// Código de asignación
var generateBtn = document.querySelector("#generate");

function writePassword() {

  let confirmLong = 0;
  let confirmSpecialCharacters = 0;
  var password = '';

  do { // doWhile loop for selection of longitude condition

    var passwordLong = prompt("1. Longitud entre 8 y 128 caracteres. \n2. Longitud diferente. ");

    if (Number(passwordLong) == passwordLong) {

      if (passwordLong == 1) {

        alert("Elegiste contraseña con longitud entre 8 y 128 caracteres. ");
        confirmLong = 1;

      } else if (passwordLong == 2) {

        alert("Elegiste longitud diferente para la contraseña. ");
        confirmLong = 2;

      } else {

        alert("Elige una opción valida");
        confirmLong = 0;
      }

    } else {

      alert("Elige una opción valida");
      confirmLong = 0;
    }

  } while (confirmLong == 0);

  do {// doWhile loop for selection of special characters condition

    var specialCharacters = prompt("1. Incluir caracteres especiales \n2. No incluir caracteres especiales");

    if (Number(specialCharacters) == specialCharacters) {

      if (specialCharacters == 1) {

        alert("Elegiste incluir caracteres especiales en tu contraseña. ");
        confirmSpecialCharacters = 1;

      } else if (specialCharacters == 2) {

        alert("Elegiste no incluir caracteres especiales en tu contraseña. ");
        confirmSpecialCharacters = 2;
      } else {

        alert("Elige una opción valida");
        confirmSpecialCharacters = 0;

      }
    } else {

      alert("Elige una opción valida");
      confirmSpecialCharacters = 0;

    }

  } while (confirmSpecialCharacters == 0);


  if (confirmLong == 1 && confirmSpecialCharacters == 1) { //if statement for true longitude & special characters condition

    function generatePassword() {
      var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!#$%&()-./?@_';

      for (i = 1; i <= 16; i++) {
        var character = Math.floor(Math.random() * string.length + 1);
        password += string.charAt(character);
      }

      return password;
    }

  } else if (confirmLong == 1 && confirmSpecialCharacters == 2) { //if statement for true longitude and different special characters condition

    function generatePassword() {
      var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';

      for (i = 1; i <= 16; i++) {
        var character = Math.floor(Math.random() * string.length + 1);
        password += string.charAt(character);
      }

      return password;
    }

  } else if (confirmLong == 2 && confirmSpecialCharacters == 1) { //if statement for true special characters condition and different longitude

    function generatePassword() {
      var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '!#$%&()-./?@_';

      for (i = 1; i < 8; i++) {
        var character = Math.floor(Math.random() * string.length + 1);
        password += string.charAt(character);
      }

      return password;
    }

  } else if (confirmLong == 2 && confirmSpecialCharacters == 2) { //if statement for different longitude and special characters condition

    function generatePassword() {
      var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';

      for (i = 1; i < 8; i++) {
        var character = Math.floor(Math.random() * string.length + 1);
        password += string.charAt(character);
      }

      return password;
    }

  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);