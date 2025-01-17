const users = [
  { username: "test", email: "test@gmail.com", password: "ABC123456a@" },
];
var isUsernameValid = false;
var isEmailValid = false;
var isPasswordValid = false;

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  isUsernameValid = validateField(
    "username",
    "Username is required.",
    /^[a-zA-Z0-9]{3,}$/,
    "Username must be at least 3 characters."
  );
  isEmailValid = validateField(
    "email",
    "Email is required.",
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    "Please enter a valid email address."
  );
  isPasswordValid = validateField(
    "password",
    "Password is required.",
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    "Password must be 8+ characters with uppercase, lowercase, and a number."
  );

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (isUsernameValid && isEmailValid && isPasswordValid) {
    const success = document.getElementById("success");
    success.textContent = "Registred Succesfully ✔️";
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    users.push(newUser);
    console.log(users);
  }

  function validateField(fieldId, emptyMessage, regex, invalidMessage) {
    const field = document.getElementById(fieldId);
    const errorMessage = document.getElementById(`${fieldId}Message`);
    const icon = errorMessage.querySelector(".icon");
    const text = errorMessage.querySelector(".text");

    if (field.value === "") {
      success.textContent = "";
      field.style.borderColor = "red";
      errorMessage.style.color = "red";
      icon.textContent = "❌";
      text.textContent = emptyMessage;
      return false;
    } else if (!regex.test(field.value)) {
      success.textContent = "";
      field.style.borderColor = "red";
      errorMessage.style.color = "red";
      icon.textContent = "❌";
      text.textContent = invalidMessage;
      return false;
    } else {
      success.style.color = "green";
      errorMessage.style.color = "green";
      field.style.borderColor = "green";
      icon.textContent = "✔️";
      text.textContent = "Valid";
      return true;
    }
  }
});
