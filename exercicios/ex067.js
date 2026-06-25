// Exercício 067: Promise.race
// Objetivo: Implementar um mecanismo de corrida de Promises, pegando o resultado do primeiro processo finalizado.
//
// Instruções:
// 1. Crie duas promises:
//    - `p1`: resolve em 500ms com "Tarefa Rápida (500ms)"
//    - `p2`: resolve em 1500ms com "Tarefa Lenta (1500ms)"
// 2. Use `Promise.race([p1, p2])` para capturar a primeira a ser concluída.
// 3. Imprima o resultado da vencedora no console: "Vencedor: [resultado]".
//
// Saída esperada no terminal:
// Vencedor: Tarefa Rápida (500ms)
//
// Para executar este arquivo, use o comando: node ex067.js

// Escreva seu código abaixo:

