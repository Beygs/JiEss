const input = document.querySelector("input");
const num = document.getElementById("number");
const result = document.getElementById("result");

function factorial(number, f = 1) {
  if (number > 0) {
    f = factorial(number - 1, f * number);
  }

  return f;
}

input.addEventListener("input", () => {
  if (input.value.trim() != "") {
    num.innerHTML = input.value;

    if (input.value.match(/^\d+$/)) {
      result.innerHTML = factorial(Number(input.value));
    } else {
      result.innerHTML = "Ecris un nombre entier positif rigolo !";
    }
  } else {
    num.innerHTML = "0";
    result.innerHTML = "1";
  }
});
