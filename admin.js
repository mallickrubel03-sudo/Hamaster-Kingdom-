function login() {
  const secret = document.getElementById("secret").value;
  if (secret === "Zp4CAC6Z_gVKYGqPYsCwIgdy7hy_OdGC-lyoHbioJr4") {
    document.getElementById("panel").style.display = "block";
  } else {
    alert("Wrong secret!");
  }
}

function createEvent() {
  alert("Event created (placeholder). Connect to Firestore here.");
}