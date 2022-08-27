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


 function togal(){
  let toggal=document.getElementById("chekdiv");
  console.log(toggal.checked)
  if(toggal.style.display=="block"){
    toggal.style.display=="none";
  }
  else{
    toggal.style.display=="block"
  }
 }
