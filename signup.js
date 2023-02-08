document.getElementById("form").addEventListener("submit", getdetails);

function getdetails(event) {
  event.preventDefault();

  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  if (n === "" || e === "" || p === "") {
    alert("Please all the details");
  } else {
    let userdata = new user(n, e, p);

    let arr = JSON.parse(localStorage.getItem("Signup")) || [];
    arr.push(userdata);
    localStorage.setItem("Signup", JSON.stringify(arr));
    alert("Signup successful");

    n = document.getElementById("name").value = "";
    e = document.getElementById("email").value = "";
    p = document.getElementById("password").value = "";
  }
}

let user = function (n, e, p) {
  this.name = n;
  this.email = e;
  this.password = p;
};
