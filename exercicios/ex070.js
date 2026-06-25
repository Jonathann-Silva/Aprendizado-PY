// Exercício 070: Funções Geradoras (Generators)
// Objetivo: Criar funções geradoras capazes de pausar e retomar sua execução por meio da palavra-chave yield.
//
// Instruções:
// 1. Crie uma função geradora chamada `geradorNumeros()`.
// 2. A função deve retornar em sequência os valores 1, 2 e 3 por meio de `yield`.
// 3. Instancie o gerador chamando a função.
// 4. Chame o método `.next()` quatro vezes, imprimindo a estrutura retornada em cada chamada (ex: `next().value` e `next().done`).
//
// Saída esperada no terminal:
// Valor: 1 | Done: false
// Valor: 2 | Done: false
// Valor: 3 | Done: false
// Valor: undefined | Done: true
//
// Para executar este arquivo, use o comando: node ex070.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Generator para criar uma sequência infinita de múltiplos de 5.
//
// function* multiplosDeCinco() {
//   let i = 5;
//   while(true) { yield i; i += 5; }
// }
// const g = multiplosDeCinco();
// console.log(g.next().value, g.next().value);
// ====================================================================

// Escreva seu código abaixo:


