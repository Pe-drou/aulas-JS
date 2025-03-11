class pessoa{
    // propiedade do objeto
    constructor(name){
        this.name = name;
    }
    // metodo ou ação
    apresentar =()=> console.log(`Olá, meu nome é ${this.name}`)
};

class aluno extends pessoa{
    estudar =()=> console.log(`${this.name} está estudando`)
    apresentar =()=> console.log(`Olá, meu nome é ${this.name} e sou um(a) aluno(a)!`)
};

class professor extends pessoa{
    ensinar =()=> console.log(`${this.name} está ensinando`)
    apresentar =()=> console.log(`Olá, meu nome é ${this.name} e sou um(a) professor(a)!`)
};


const pedro = new aluno("Pedro", 17)
const raul = new professor("Raul" , 28)

console.log(pedro.name, pedro.age)
console.log(raul.name, raul.age)
pedro.apresentar()
raul.apresentar()

// pessoa tem um metodo padrão apresentar
// aluno e professor herdam desse metodo mas reescrevem para exibir mensagens diferentes
// mesmo metodo e comportamentos diferentes, isso é polimorfismo