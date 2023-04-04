const dataLowercase = "zertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumber = "0123456789";
const dataSymbols = `$^*!?ù_-&`;
const rangeValue = document.getElementById("password-lenght");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (number.checked) data.push(...dataNumber);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  //   COPY password

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié ! ";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
};

generateButton.addEventListener("click", generatePassword);
