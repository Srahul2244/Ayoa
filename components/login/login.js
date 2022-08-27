let submit = () => {
  let signupls = JSON.parse(localStorage.getItem("signup")) || [];
  let signinls = [];
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "" || password == "") {
    alert("Fill the form");
  }
  if (signupls.length <= 0) {
      alert("User Data is not found plese Register");
      window.location.href = "signup.html";
  } else if (signupls.length >= 1) {
    signupls.forEach((el) =>{
      console.log(signupls);
      if (password === el.password && email === el.email) {
        signinls.push(el);
        localStorage.setItem("signin", JSON.stringify(signinls));
        alert("Login Succeccfully Completed");
        window.location.href = "index.html";
      } else if (email !== el.email || password !== el.password) {
        console.log(email,el.email,password,el.password)
        alert("wrong Details");
      }
    });
  }

}



