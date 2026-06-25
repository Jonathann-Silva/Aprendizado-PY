// Exercício 066: Promise.all
// Objetivo: Executar múltiplas promises em paralelo e obter os resultados agrupados após o término de todas.
//
// Instruções:
// 1. Crie três funções que retornam Promises que resolvem após temporizadores:
//    - `p1` resolve em 1s com a string "Dados 1"
//    - `p2` resolve em 2s com a string "Dados 2"
//    - `p3` resolve em 1.5s com a string "Dados 3"
// 2. Use `Promise.all([p1, p2, p3])` para disparar as execuções concorrentemente.
// 3. Trate o resultado final e imprima o array de respostas no console.
//
// Saída esperada no terminal:
// Resultados: [ 'Dados 1', 'Dados 2', 'Dados 3' ]
//
// Para executar este arquivo, use o comando: node ex066.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Carregar configurações de múltiplos arquivos JSON em paralelo.
//
// const p1 = Promise.resolve('Config A');
// const p2 = Promise.resolve('Config B');
// Promise.all([p1, p2]).then(configs => console.log(configs));
// ====================================================================

// Escreva seu código abaixo:


