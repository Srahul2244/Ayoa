let submit = async () => {
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    let res = await fetch(`http://localhost:3000/signup`);
    let data = await res.json();
    check(data, Email, Password);
  };
  let check = (data, Email, Password) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === Email && Password == data[i].password) {
        alert("Successfully loged. your redirecting into User page");
        window.location.href="user.html"
        return;
      }
    }
    alert("Invalid Data");
  };
  