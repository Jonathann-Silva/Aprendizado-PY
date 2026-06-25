// Exercício 071: Iteradores Assíncronos (for await...of)
// Objetivo: Iterar sobre dados assíncronos gerados dinamicamente com delays de tempo.
//
// Instruções:
// 1. Crie um gerador assíncrono chamado `async function* gerarNumerosAssincronos()`.
// 2. Ele deve esperar 500ms usando um helper e dar um `yield` nos valores de 1 a 3 sequencialmente.
// 3. Crie uma função assíncrona principal para consumir o gerador.
// 4. Use a estrutura de repetição `for await (const num of gerarNumerosAssincronos())` para iterar e imprimir cada número recebido.
//
// Saída esperada no terminal:
// Número recebido: 1
// Número recebido: 2
// Número recebido: 3
//
// Para executar este arquivo, use o comando: node ex071.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Iterar sobre requisições que chegam de uma fila assíncrona.
//
// async function* filaDeProcessos() {
//   yield 'Processo A';
//   yield 'Processo B';
// }
// async function rodar() {
//   for await (const p of filaDeProcessos()) { console.log(p); }
// }
// rodar();
// ====================================================================

// Escreva seu código abaixo:


