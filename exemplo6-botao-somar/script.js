let num1
let num2
let result = 0
const soma =()=> {
    num1 = parseFloat(document.getElementById("num1").value)
    num2 = parseFloat(document.getElementById("num2").value)
    if(num1 == NaN){
        num1 = 0
    }
    if(num2 == NaN){
        num2 = 0
    }
    result = result + num1 + num2
    document.getElementById("resultado").innerText = `SOOOOOOOOMA É... ${result}!!!`

}