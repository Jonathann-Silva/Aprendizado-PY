// Exercício 061: Child Process - spawn()
// Objetivo: Iniciar um processo filho de forma assíncrona, lendo dados via stream de saída.
//
// Instruções:
// 1. Importe `spawn` do módulo `child_process`.
// 2. Inicie o processo `node` enviando como argumento `-e` e a string `"console.log('Olá do Spawn')"` (isto roda um código node inline).
// 3. Escute o evento `data` do stream `stdout` do processo filho e imprima os dados recebidos (lembre-se de converter para string).
// 4. Escute o evento `close` do processo filho e imprima: "Processo finalizado com código: [codigo]".
//
// Saída esperada no terminal:
// Saída do processo filho: Olá do Spawn
// Processo finalizado com código: 0
//
// Para executar este arquivo, use o comando: node ex061.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Iniciar um processo filho assíncrono para rodar node -v usando spawn.
//
// const { spawn } = require('child_process');
// const ls = spawn('node', ['-v']);
// ls.stdout.on('data', dados => console.log(dados.toString()));
// ====================================================================

// Escreva seu código abaixo:


