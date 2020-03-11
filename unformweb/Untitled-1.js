var dataNasc = "20/02";

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;

if (dataNasc === day + "/" + month) {
  console.log("Parabéns");
}
