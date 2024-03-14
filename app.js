const piElement = document.getElementById("pi");
const fontSizeInput = document.getElementById("fontSize");
const groupsInput = document.getElementById("groups");

function generatePiDigits() {
  const digits = [];
  for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
    digits.push(i % 10);
  }
  piElement.innerHTML = digits.join("");
}
generatePiDigits();

function changeFontSize() {
  const fontSize = parseInt(fontSizeInput.value);
  document.body.style.fontSize = `${fontSize}px`;
}

function toggleTheme() {
  const darkMode = document.getElementById("darkMode");
  const body = document.querySelector("body");
  if (darkMode.checked) {
    body.style.backgroundColor = "#212121";
    piElement.style.color = "white";
    groupsInput.style.backgroundColor = "#333";
    fontSizeInput.style.backgroundColor = "#333";
  } else {
    body.style.backgroundColor = "white";
    piElement.style.color = "black";
    groupsInput.style.backgroundColor = "white";
    fontSizeInput.style.backgroundColor = "white";
  }
}
