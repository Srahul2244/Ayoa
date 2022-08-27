let submit = () => {
  let signupls = JSON.parse(localStorage.getItem("signup")) || [];
  let signinls = [];
  
  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  if (email == "" || password == "") {
     return alert("Fill the form");
    }
    if (signupls.length <= 0) {
      alert("User Data is not found plese Register");
      window.location.href = "../signup/signup.html";
  }
  //  else if (signupls.length >= 1) {


    let flag=false;
    
    signupls.forEach((el) =>{
      console.log(signupls);

      if (password === el.password && email === el.email){
        
          signinls.push(el);
  
          localStorage.setItem("signin", JSON.stringify(signinls));
          alert("Login Succeccfully Completed");
         return window.location.href = "user.html";
        
      } 
      else{
        flag=true;
      }
  
    });


    if(flag===true){
      alert("Invalid data")
    }

  // }

}



// function submit() {

//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

// if (arr.length == 0) {
//   alert("No user till now");
//   return;
// }

// let obj = {
//   email,
//   password,
// };

// let isSignined = false;
// arr.forEach(function (elem) {
//   if (elem.email == obj.email && elem.password == obj.password) {
//     isSignined = true;
//     localStorage.setItem("signinData", JSON.stringify(elem));
//     alert("Signin Successful");
//     window.location.href = "index.html";
//   }
// });
// if (isSignined == false) {
//   alert("Signup first");
// }
// }