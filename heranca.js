// Classe de abstração
function Animal(nome, raca, peso) {
    this.nome = nome;
    this.raca = raca;
    this.peso = peso;
}

Animal.prototype.emitirSom = function () {
    console.log("O animal emitiu um som");
};

// Classe herdeira
function Cachorro(nome, raca, peso) {
    Animal.call(this, nome, raca, peso);
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.emitirSom = function () {
    console.log("O cachorro latiu");
};

// Classe herdeira
function Gato(nome, raca, peso) {
    Animal.call(this, nome, raca, peso);
}

Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.emitirSom = function () {
    console.log("O gato miou");
};

// Instâncias (3 objetos)
const cachorro1 = new Cachorro("Tito", "Pastor-alemão", "23kg");
const cachorro2 = new Cachorro("Bolt", "Vira-lata", "18kg");
const gato1 = new Gato("Mel", "Siamês", "4kg");

console.log(cachorro1);
console.log(cachorro2);
console.log(gato1);
