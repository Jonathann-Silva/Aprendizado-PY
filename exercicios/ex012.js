// Exercício 012: Adicionar conteúdo ao final de um arquivo
// Objetivo: Usar o módulo `fs` para concatenar/adicionar conteúdo a um arquivo existente sem apagá-lo.
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Use a função síncrona `fs.appendFileSync('meu_arquivo.txt', '\nNova linha adicionada!')` para adicionar texto ao arquivo 'meu_arquivo.txt'.
// 3. Em seguida, leia o arquivo usando `fs.readFileSync('meu_arquivo.txt', 'utf8')` e imprima no console para ver o resultado completo.
//
// Saída esperada no terminal:
// Aprendendo Node.js é muito legal!
// Nova linha adicionada!
//
// Para executar este arquivo, use o comando: node ex012.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Anexar dados de horário a um arquivo de acessos de forma assíncrona.
//
// const fs = require('fs');
// fs.appendFile('acessos.txt', 'Acesso em: ' + new Date() + '\n', 'utf8', (err) => {
//   if (err) throw err;
//   console.log('Nova linha de acesso registrada.');
// });
// ====================================================================

// Escreva seu código abaixo:


