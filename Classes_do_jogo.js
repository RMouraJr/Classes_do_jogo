class Heroi {
    constructor(nome, raca, tipo) {
        this.nome = nome;
        this.raca = raca;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "usando magia";
                break;
            case "guerreiro":
                ataque = "usando uma espada";
                break;
            case "monge":
                ataque = "usando artes marciais";
                break;
            case "ninja":
                ataque = "usando a shuriken";
                break;
            default:
                ataque = "não possui ataque definido";
        }

        return ataque;
                
    }

    infromacoes() {
        let info;

        switch (this.raca) {
            case "Humano":
                info = "Humano";
                break;
            case "Elfo":
                info = "Elfo";
                break;
            case "Orc":
                info = "Orc";
                break;
            case "Tauren":
                info = "Tauren";
                break;
            default:
                info = "Não possui raça especificada";
        }

        
        console.log(`${this.nome} é um ${info} ${this.tipo}, e atacou ${this.atacar()}. `);
    }
    
}

const heroi1 = new Heroi("Herói Magus", "Elfo", "mago");
const heroi2 = new Heroi("Guerrero Fortis", "Orc", "guerreiro");
const heroi3 = new Heroi("Naruto", "Humano", "ninja");
const heroi4 = new Heroi("Bruce Lee", "Tauren", "monge");


heroi1.infromacoes(); 
console.log("---------------------------------------------------------");

heroi2.infromacoes(); 
console.log("---------------------------------------------------------");

heroi3.infromacoes();
console.log("---------------------------------------------------------");

heroi4.infromacoes();

