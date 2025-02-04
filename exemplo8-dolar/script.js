let real = 0
let dolar = 0

const transfere =()=>{
    dolar = parseFloat(document.getElementById("dolar").value)
    real = parseFloat(document.getElementById("real").value)
    let dolar2 = real/6
    let real2 = dolar*6
    document.getElementById("dolar2").innerText = `${dolar2}`
    document.getElementById("real2").innerText = `${real2}`
}