let num1 = parseFloat(document.getElementById("numero1").value)
let num2 = parseFloat(document.getElementById("numero2").value)
let res
const mais =()=>{
    num1 = parseFloat(document.getElementById("numero1").value)
    num2 = parseFloat(document.getElementById("numero2").value)
    res = num1 + num2
    document.getElementById("resultado").innerText = res
}
const menos =()=>{
    num1 = parseFloat(document.getElementById("numero1").value)
    num2 = parseFloat(document.getElementById("numero2").value)
    res = num1 - num2
    document.getElementById("resultado").innerText = res
}
const vezes =()=>{
    num1 = parseFloat(document.getElementById("numero1").value)
    num2 = parseFloat(document.getElementById("numero2").value)
    res = num1 * num2
    document.getElementById("resultado").innerText = res
}
const dividir =()=>{
    num1 = parseFloat(document.getElementById("numero1").value)
    num2 = parseFloat(document.getElementById("numero2").value)
    res = num1 / num2
    document.getElementById("resultado").innerText = res
}