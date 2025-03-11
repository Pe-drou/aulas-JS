class funcionario{
    constructor(nome, id){
        if(this.constructor === funcionario){
            throw new Error("Num podi fazê assim naum")
        }
        this.nome = nome
        this.id = id
    }
}
class diretor{
    #permissao
    constructor(nome, permissao){
        this.nome = nome
        this.#permissao = permissao
    }
    apresentar=()=>{
        document.getElementById('tequisto').innerText = `Sou o(a) diretor(a) do hospital, meu nome é ${this.nome} e minhas permissões são privadas`
        console.log(this.nome, `Permissão: ${this.#permissao}`)
    }
}
class doutor extends funcionario{
    apresentar=()=>{
        document.getElementById('tequisto').innerText = `Sou o(a) doutor(a) ${this.nome}, meu identificador é ${this.id}.`
        console.log(this.nome, this.id)
    }
}
class cirurgia extends funcionario{
    apresentar=()=>{
        document.getElementById('tequisto').innerText = `Sou o(a) cirurgião(ã) ${this.nome} e meu identificador é ${this.id}.`
        console.log(this.nome, this.id)
    }
}
class enfermagem extends funcionario{
    apresentar=()=>{
        document.getElementById('tequisto').innerText = `Sou o(a) enfermeiro(a) ${this.nome}, meu identificador é ${this.id}.`
        console.log(this.nome, this.id)
    }
}
class limpeza extends funcionario{
    apresentar=()=>{
        document.getElementById('tequisto').innerText = `Sou o(a) zelador(a) ${this.nome}, identificador ${this.id}.`
        console.log(this.nome, this.id)
    }
}
class recepcao extends funcionario{
    apresentar=()=>{
        document.getElementById('tequisto').innerText = `Sou o(a) recepcionista ${this.nome}, o meu identificador é ${this.id}.`
        console.log(this.nome, this.id)
    }
}

const joao = new doutor("João", 29382)
const gabriel = new cirurgia("Gabriel", 93487)
const maria = new cirurgia("Maria", 23237)
const irineu = new limpeza("Irineu", "se não sabe nem eu")
const isaura = new limpeza("Isaura", 37943)
const jorel = new enfermagem("Jorel", 1984)
const pedro = new recepcao("Pedro", 23450)
const josivaldo = new diretor("Josivaldo", "ele não tem permissão para nada, é um diretor horrível")