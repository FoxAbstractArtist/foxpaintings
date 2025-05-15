
const loginForm = document.getElementById("loginForm");
const uploadSection = document.getElementById("uploadSection");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === "admin" && password === "fox123") {
    loginForm.style.display = "none";
    uploadSection.style.display = "block";
  } else {
    alert("Wrong credentials!");
  }
});

function uploadPainting() {
  alert("Upload simulated. Connect to backend for full functionality.");
}
