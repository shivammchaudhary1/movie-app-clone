document.getElementById("form").addEventListener("submit", getdetails);

let arr = JSON.parse(localStorage.getItem("Signup"));

function getdetails(event) {
  event.preventDefault();
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  for (let i = 0; i < arr.length; i++) {
    if (e === arr[i].email && p === arr[i].password) {
      alert("login successful");
    } else {
      alert("Error: Check Your Credentials");
    }
  }
}
