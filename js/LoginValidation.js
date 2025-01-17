const users = [
  { username: "test", email: "test@gmail.com", password: "ABC123456a@" },
];

var isUsernameValid = false;
var isPasswordValid = false;

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  isUsernameValid = validateField(
    "username",
    "Username is required.",
    /^[a-zA-Z0-9]{3,}$/,
    "Username must be at least 3 characters."
  );

  isPasswordValid = validateField(
    "password",
    "Password is required.",
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    "Password must be 8+ characters with uppercase, lowercase, and a number."
  );

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (isUsernameValid && isPasswordValid) {
    const success = document.getElementById("success");
    if (isUserExists(username, password)) {
      console.log(username);
      console.log(password);
      success.textContent = "User exist ✔️";
      success.style.color = "green";
    } else {
      success.textContent = "User does not exist ❌";
      success.style.color = "red";
    }
  }

  function isUserExists(username, password) {
    return users.some(
      (user) => user.username === username && user.password === password
    );
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
