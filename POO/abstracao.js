class pessoa {
    constructor(nome) {
        if(this.constructor === pessoa){
            throw new Error("Não pode criar esse objeto")
        }
        this.nome = nome
    }
}

class aluno extends pessoa{}

const pedro = new aluno("Pedro")
console.log(pedro.nome)

// a classe pessoa não pode ser instanciadadieratemnte
// if no construtor impede the objetor iguai sejam criados
// o aluno herda de pessoa, então pode ser instanciado normalmente
// isso gaarante que pessoa funcione como modelo para outras classes