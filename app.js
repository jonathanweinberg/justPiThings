const piElement = document.getElementById("pi");
const groupsInput = document.getElementById("groups");
const fontSizeInput = document.getElementById("fontSize");
const saveButton = document.querySelector("button");

function generatePi() {
  const groups = Math.floor(parseInt(groupsInput.value));
  const digitsPerGroup = 15; // you can adjust this value as needed
  const totalDigits = groups * digitsPerGroup;
  const piDigits = [];

  for (let i = 0; i < totalDigits; i++) {
    piDigits[i] = Math.random() * 10 | 0; // generate a random digit between 0 and 9
  }

  let digits = "";
  for (let i = 0; i < piDigits.length; i++) {
    if ((i + 1) % groups === 0 && i !== 0) {
      digits += "<br>";
    } else if (i === 0) {
      continue;
    }
    digits += piDigits[i];
  }

  const fontSize = parseInt(fontSizeInput.value);
  piElement.innerHTML = `<h1 style="font-size: ${fontSize}px">${digits}</h1>`;
}

function savePi() {
  const piText = new Blob([piDigits.join("")], { type: "text/plain" });
  const downloadLink = document.createElement("a");
  downloadLink.href = window.URL.createObjectURL(piText);
  downloadLink.setAttribute("download", "pi-digits.txt");
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
}

groupsInput.addEventListener("input", generatePi);
fontSizeInput.addEventListener("input", generatePi);
saveButton.addEventListener("click", savePi);
generatePi(); // call the function on page load to display initial digits
