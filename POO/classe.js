class aluno{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    estudar =()=> console.log(`${this.nome} está estudando`)
    anos =()=> console.log(`${this.nome} tem ${this.idade} anos`)
    filiz =()=> console.log(`Esse infiliz chamado ${this.nome} tá filiz`)
    jogar =()=> console.log(`Manito ${this.nome} tá jogando nu meio da aula`)
}

const pedro = new aluno("Pedro" , 17)
const gabriel = new aluno("Gabriel" , 16)

pedro.anos()
pedro.estudar()
gabriel.jogar()