let num1 = parseInt(prompt("Insira um número"))
let num2 = parseInt(prompt("Insira outro número para somar"))
let resposta = num1 + num2
document.getElementById("soma").innerText = "A soma dos dois números é: " + resposta

let num3 = parseInt(Math.random()*100000000000000000)
document.getElementById("soma2").innerText = "gerador de número aleatório: " + num3