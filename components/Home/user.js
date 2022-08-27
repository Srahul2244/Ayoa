document.getElementById("sidecheck").addEventListener("click", function () {
  
  let side = document.getElementById("sidecheck");
  let lab = document.getElementById("lab");
  let button=document.querySelector("#menu");
  let sidebar=document.querySelector("#sidebar")

  if (side.checked == false) {
    sidebar.style.transform = "translateX(-270px)";
    button.style.backgroundColor = "#1794ff";
    document.querySelector("#logo").style.backgroundColor = "#1794ff";
  } else {
    sidebar.style.transform = "translateX(0)";
    button.style.backgroundColor = "#002849";
    document.querySelector("#logo").style.backgroundColor = "#002849";
  }
});


// let togal=()=>{
//   let toggal=document.getElementById("togal");
//   if(togal.style.dis)
// }
