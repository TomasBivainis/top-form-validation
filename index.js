function checkZIP() {
  const constrains = {
    lt: [
      "^(LT-)?\\d{5}$",
      "Lithuania ZIPs must have exactly 5 digits: e.g. LT-75412 or 75412",
    ],
    ch: [
      "^(CH-)?\\d{4}$",
      "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
    ],
    fr: [
      "^(F-)?\\d{5}$",
      "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
    ],
    de: [
      "^(D-)?\\d{5}$",
      "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
    ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
    ],
  };

  const country = document.querySelector("#country").value;

  const regex = new RegExp(constrains[country][0]);

  const inputZip = document.querySelector("#zip");

  inputZip.setCustomValidity("");

  if (!regex.test(inputZip.value)) {
    inputZip.setCustomValidity(constrains[country][1]);
    inputZip.reportValidity();
  }
}

function checkEmail() {
  const inputEmail = document.querySelector("#email");
  inputEmail.setCustomValidity("");

  if (!inputEmail.checkValidity()) {
    inputEmail.setCustomValidity('Email has to have an "@" symbol');
    inputEmail.reportValidity();
  }
}

function checkPassword() {
  const inputPassword = document.querySelector("#password");
  inputPassword.setCustomValidity("");

  if (!inputPassword.checkValidity()) {
    inputPassword.setCustomValidity(
      "Password needs to be at least 5 characters long"
    );
    inputPassword.reportValidity();
  }
}

window.onload = () => {
  document.querySelector("#email").onchange = checkEmail;
  document.querySelector("#country").onchange = checkZIP;
  document.querySelector("#zip").onchange = checkZIP;
  document.querySelector("#password").onchange = checkPassword;
};

document.querySelector("#submit").addEventListener("submit", (e) => {
  if (
    !document.querySelector("#email").checkValidity() ||
    !document.querySelector("#zip").checkValidity() ||
    !document.querySelector("#password").checkValidity()
  ) {
    console.log("default prevented");
    e.defaultPrevented();
  }
});
