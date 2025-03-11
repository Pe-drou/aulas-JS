class aluno{
    #nota
    constructor(nome, idade, nota){
        this.nome = nome;
        this.idade = idade;
        this.#nota = nota;
    }
    estudar=()=>console.log(`${this.nome} está estudando`)
    vernota=()=> this.#nota
    doxxado =()=> console.log(`Aluno com nome ${this.nome}, de ${this.idade} anos, tirou ${this.#nota} na ultima prova`)
}

const pedro = new aluno("Pedro" , 16 , 99)

pedro.estudar()
console.log(pedro.nota)
console.log(pedro.vernota())
pedro.doxxado()