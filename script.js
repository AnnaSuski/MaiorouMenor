
var botao = document.getElementById("botao").addEventListener("click",
    function calcular() {
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        verificarNum(num1, num2);
    }
)
function verificarNum(num1, num2) {
    if (num2 === "" || num1 === "") {
        window.alert("Prencher os campos")
    }
    if (num1 > num2 && num2 != "" && num1 != "" ) {
        window.alert("Valor 1 é maior")
        console.log("Valor 1 é maior")
    }
    if (num2 > num1 && num2 != "" && num1 != "") {
        window.alert("Valor 2 é maior")
        console.log("Valor 2 é maior")
    }
    if (num1 == num2 && num2 != "" && num1 != ""){
        window.alert("Valores iguais")
        console.log("Valores iguais")
    }
}