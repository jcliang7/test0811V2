document.getElementById("demo").innerHTML = 5 + 6;
//window.alert("This is the alert message.");
//console.log("This is the console message.");
var a = 0;
function myFunction() {
  if (a==0) {
    document.getElementById("demo2").style.fontSize = '35px';
    a = 1;
  }
  else {
    document.getElementById("demo2").style.fontSize = '15px';
    a = 0;
  }
}