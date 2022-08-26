let submit = async() => {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    if(name==="" || email=="" || password==""){
        alert("fILL the form")
        return
    }const d = new Date();
    let day = d.getTime()
    console.log(name,email,password)
    let send_data={
        id:day,
        name,
        email,
        password
    }
    let res = await fetch("http://localhost:3000/signup/", {
    method: "POST",
    body: JSON.stringify(send_data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await res.json();
  window.location.href="./login.html"
}