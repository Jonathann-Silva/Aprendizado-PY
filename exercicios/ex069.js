// Exercício 069: Promise.any
// Objetivo: Obter o primeiro resultado resolvido com sucesso de um conjunto, ignorando rejeições intermediárias.
//
// Instruções:
// 1. Crie duas Promises:
//    - `p1`: Rejeita em 200ms com "Erro rápido"
//    - `p2`: Resolve em 1000ms com "Sucesso lento (1s)"
// 2. Use `Promise.any([p1, p2])` para aguardar apenas pelo primeiro sucesso.
// 3. Imprima o valor resolvido no console: "Primeiro sucesso recebido: [resultado]".
//
// Saída esperada no terminal:
// Primeiro sucesso recebido: Sucesso lento (1s)
//
// Para executar este arquivo, use o comando: node ex069.js

// Escreva seu código abaixo:

