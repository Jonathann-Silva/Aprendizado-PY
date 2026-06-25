// Exercício 099: unhandledRejection e uncaughtException
// Objetivo: Capturar exceções globais que não foram tratadas com blocos de try/catch no código para evitar crashes inesperados.
//
// Instruções:
// 1. Escute o evento global `uncaughtException` em `process` e imprima no terminal: "Capturado erro não tratado: [mensagem-do-erro]".
// 2. Escute o evento global `unhandledRejection` em `process` e imprima: "Capturado rejeição de Promise não tratada: [motivo]".
// 3. Force uma falha síncrona disparando um erro: `throw new Error('Erro inesperado!')` dentro de um `setTimeout` de 100ms para capturar no `uncaughtException`.
// 4. Force uma falha de Promise não tratada com `Promise.reject('Promessa rejeitada!')`.
//
// Saída esperada no terminal:
// Capturado erro não tratado: Erro inesperado!
// Capturado rejeição de Promise não tratada: Promessa rejeitada!
//
// Para executar este arquivo, use o comando: node ex099.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar um logger central que salva erros em arquivo antes de encerrar.
//
// process.on('uncaughtException', (err) => {
//   fs.appendFileSync('erros.log', err.stack + '\n');
//   process.exit(1);
// });
// ====================================================================

// Escreva seu código abaixo:


