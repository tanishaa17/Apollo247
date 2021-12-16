document.querySelector("#login").addEventListener("click", adminlogin);

function adminlogin() {
  var email = document.querySelector("#em").value;
  var pass = document.querySelector("#psw").value;

  if (email == "admin" && pass == "admin") {
    window.location.href = "admin.html";
  }
}
