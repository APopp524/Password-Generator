// Page Opening Prompts //

window.addEventListener('load', function() {
  var length = prompt("How many characters would you like your password to be?");

  while (length < 8 || length > 128) {
    length = prompt("Your password must be 8-128 characters. How many characters would you like your password to be?");
  }

  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  while (!(uppercase || lowercase || numbers || symbols)) {
    alert("You must select at least one character type!");

    uppercase = confirm("Would you like to use uppercase letters?");
    lowercase = confirm("Would you like to use lowercase letters?");
    numbers = confirm("Would you like to use numbers?");
    symbols = confirm("Would you like to use special characters?");
  }

  // DOM //
  const resultEl = document.getElementById('password');

  document.getElementById('generate').addEventListener('click', () => {
    resultEl.value = generatePassword(lowercase, uppercase, numbers, symbols, length);
    });
    }
  );
;


const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(item => Object.values(item)[0]);

  // Loop //
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Rando.js //
function getRandomLower() {
  return rando("qwertyuiopasdfghjklzxcvbnm")
}

function getRandomUpper() {
  return rando("QWERTYUIOPASDFGHJKLZXCVBNM");
}

function getRandomNumber() {
  return rando(9);
}

function getRandomSymbol() {
  return rando('!@#$%^&*(){}[]=<>/,.');
}