var birthday = document.querySelector("#birthday");
var luckyNumber = document.querySelector("#lucky-number");
var checkBtn = document.querySelector("#btn-check");
var output = document.querySelector("#output");
var gifOutput = document.querySelector("#gif-output");

function calculate(n) {
  let sum = 0;
  let remainder = 0;
  while (n > 0) {
    const current = n % 10;
    sum += current;
    n = Math.floor(n / 10);
  }

  remainder = sum % Number(luckyNumber.value);

  if (remainder === 0) {
    output.innerText = "Your Birthday is LUCKY!";
    gifOutput.innerHTML = `<iframe src="https://giphy.com/embed/LWhLL32XDmcJhXTHVu" width="255" height="360" frameBorder="0" class="giphy-embed"></iframe>`;
  } else {
    output.innerText = "Oops! No luck.";
    gifOutput.innerHTML = `<iframe src="https://giphy.com/embed/26tOXgoz0WNQhwb04" width="255" height="360" frameBorder="0" class="giphy-embed"></iframe>`;
  }
}

function handleClick() {
  var dateValue = birthday.value;

  dateValue = dateValue.replace(/-/g, "");
  dateValue = parseInt(dateValue, 10);

  calculate(dateValue);
}

checkBtn.addEventListener("click", handleClick);
