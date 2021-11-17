const input = document.querySelector("input");
const nameDisplay = document.getElementById("nameDisplay");

input.addEventListener("input", () => {
  if (input.value.trim() != "") {
    nameDisplay.innerHTML = input.value;
  } else {
    nameDisplay.innerHTML = "monde";
  }
});
