// Exercício 010: Escrever em um arquivo de forma assíncrona
// Objetivo: Usar o módulo `fs` para escrever em um arquivo usando a versão assíncrona (não-bloqueante).
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Use a função `fs.writeFile('assincrono.txt', 'Texto assíncrono!', (err) => { ... })`.
// 3. Dentro da função de callback, verifique se houve erro com `if (err) throw err;`
// 4. Se der tudo certo, imprima: "Escrita assíncrona concluída!" dentro do callback.
//
// Saída esperada no terminal:
// Escrita assíncrona concluída!
//
// Para executar este arquivo, use o comando: node ex010.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Gravar um arquivo contendo erros de sistema de forma assíncrona.
//
// const fs = require('fs');
// fs.writeFile('erros.log', 'Erro 404 detectado', 'utf8', (err) => {
//   if (err) throw err;
//   console.log('Log gravado de forma assíncrona.');
// });
// ====================================================================

// Escreva seu código abaixo:


