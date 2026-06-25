// Exercício 014: Listar conteúdo de uma pasta
// Objetivo: Listar o nome de todos os arquivos e pastas contidos em um diretório.
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Use `fs.readdirSync('.')` (o ponto representa a pasta atual) para ler o diretório de forma síncrona. Isso retorna um array de nomes.
// 3. Use um loop ou `.forEach()` para imprimir cada nome no console.
//
// Saída esperada no terminal:
// (Lista com os nomes dos arquivos contidos na pasta de execução, como ex001.js, ex002.js, etc.)
//
// Para executar este arquivo, use o comando: node ex014.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Listar de forma assíncrona os arquivos contidos no diretório raiz do projeto.
//
// const fs = require('fs');
// fs.readdir('./', (err, arquivos) => {
//   if (err) throw err;
//   console.log('Arquivos encontrados:', arquivos);
// });
// ====================================================================

// Escreva seu código abaixo:


