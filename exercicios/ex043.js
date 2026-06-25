// Exercício 043: Classes - Herança
// Objetivo: Criar uma subclasse usando a palavra-chave extends e o método super.
//
// Instruções:
// 1. Crie uma classe `Pessoa` igual ao exercício anterior.
// 2. Crie uma classe `Desenvolvedor` que estende (`extends`) `Pessoa`.
// 3. No construtor de `Desenvolvedor`, receba `nome`, `idade` e `linguagem`. Chame `super(nome, idade)` para reusar o construtor pai.
// 4. Sobrescreva o método `apresentar()` para retornar: "Olá, meu nome é [nome], tenho [idade] anos e programo em [linguagem]."
// 5. Instancie o desenvolvedor com "Julia", 25, e "JavaScript", execute `apresentar()` e imprima no console.
//
// Saída esperada no terminal:
// Olá, meu nome é Julia, tenho 25 anos e programo em JavaScript.
//
// Para executar este arquivo, use o comando: node ex043.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar uma classe Moto que herda de Veiculo chamando o super().
//
// class Veiculo {
//   constructor(marca) { this.marca = marca; }
// }
// class Moto extends Veiculo {
//   constructor(marca, cilindradas) {
//     super(marca);
//     this.cilindradas = cilindradas;
//   }
// }
// const minhaMoto = new Moto('Honda', 250);
// console.log(minhaMoto.marca, minhaMoto.cilindradas);
// ====================================================================

// Escreva seu código abaixo:


