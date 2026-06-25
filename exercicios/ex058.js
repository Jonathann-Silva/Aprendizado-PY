// Exercício 058: Módulo Readline - Entrada Simples
// Objetivo: Solicitar entrada de dados do usuário diretamente pelo terminal de forma interativa.
//
// Instruções:
// 1. Importe o módulo `readline`.
// 2. Crie a interface de leitura associando a entrada (`process.stdin`) e a saída (`process.stdout`).
// 3. Use o método `question()` para perguntar: "Qual é o seu nome? ".
// 4. Na resposta do usuário, imprima no console: "Olá, [nome]!".
// 5. Não esqueça de fechar a interface de readline usando `rl.close()` no final.
//
// Saída esperada no terminal:
// Qual é o seu nome? João
// Olá, João!
//
// Para executar este arquivo, use o comando: node ex058.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Solicitar que o usuário digite um comando de confirmação (S/N) no terminal.
//
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// rl.question('Deseja continuar? (S/N) ', (resposta) => {
//   console.log(`Você digitou: ${resposta}`);
//   rl.close();
// });
// ====================================================================

// Escreva seu código abaixo:


