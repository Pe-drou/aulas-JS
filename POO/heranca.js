class pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar =()=> console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos`)
}


class aluno extends pessoa{
    estudar =()=> console.log(`${this.nome} está estudando`)
}
class professor extends pessoa{
    ensinar =()=> console.log(`${this.nome} está ensinando`)
}

const pedro = new aluno("Pedro", 17)
const raul = new professor("Raul" , 28)

raul.apresentar()
pedro.apresentar()
raul.ensinar()
pedro.estudar()