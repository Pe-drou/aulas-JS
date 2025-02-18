// para teste:
// const botao=()=>{
//     console.log('funcionando!')
// }
// 
// console.log(lista)
// console.log(count)

let list = document.querySelectorAll('.item')
let count = parseInt(list.length)
let ativo = parseInt(0)

// RETIRAR O "onClick" NOS BOTÕES DE MUDAR DO HTML

// let next = document.getElementById('proximo')   
// let prev = document.getElementById('anterior')
// console.log(count)

// next.onclick =()=>{
//     let disable = document.querySelector('.ativo')
//     disable.classList.remove('ativo')
//     ativo = ativo + 1
//     if(ativo==count){ativo=0}
//     list[ativo].classList.add('ativo')
// }
// prev.onclick =()=>{
//     let disable = document.querySelector('.ativo')
//     disable.classList.remove('ativo')
//     ativo = ativo - 1
//     if(ativo==-1){ativo=count-1}
//     list[ativo].classList.add('ativo')
// }



// COLOCAR "onClick" NOS BOTÕES DE MUDAR NO HTML, COLOCAR VALOR "prev" E "next" NO DE ANTERIOR E PROXIMO

const button =(val)=>{
    let disable = document.querySelector('.ativo')
    disable.classList.remove('ativo') 
    if(val == `prev`){
        ativo+=1
        if(ativo==count){ativo=0}
        list[ativo].classList.add('ativo')
    }
    if(val == `next`){
        ativo-=1
        if(ativo<0){ativo=count-1}
        list[ativo].classList.add('ativo')
    }
}