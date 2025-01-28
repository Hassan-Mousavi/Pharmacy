function showPassword() {
  let x = document.getElementById("Password1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
