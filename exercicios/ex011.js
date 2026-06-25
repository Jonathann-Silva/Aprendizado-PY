// Exercício 011: Ler um arquivo de forma assíncrona
// Objetivo: Usar o módulo `fs` para ler um arquivo usando a versão assíncrona e callback.
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Use a função `fs.readFile('assincrono.txt', 'utf8', (err, data) => { ... })`.
// 3. No callback, trate o erro e imprima o conteúdo de `data` no console.
//
// Saída esperada no terminal:
// Texto assíncrono!
//
// Para executar este arquivo, use o comando: node ex011.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Ler o arquivo 'erros.log' de forma assíncrona.
//
// const fs = require('fs');
// fs.readFile('erros.log', 'utf8', (err, dados) => {
//   if (err) {
//     console.error('Erro na leitura assíncrona:', err.message);
//     return;
//   }
//   console.log(`Dados lidos: ${dados}`);
// });
// ====================================================================

// Escreva seu código abaixo:


