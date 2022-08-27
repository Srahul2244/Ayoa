let signup = JSON.parse(localStorage.getItem("signup")) || [];
let submit = () => {
  let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
  if (
    name == "" ||
    email == "" ||
    password == ""
  ) {
    alert("Fill the form");
  } else {
    let Email =email;
    let Name = name;
    let Password = password;
    let obj = {
      email: Email,
      name: Name,
      password: Password,
    };
    signup.push(obj);
    localStorage.setItem("signup", JSON.stringify(signup));
    window.location.href = "signin.html";
  }
}
console.log(signup);
