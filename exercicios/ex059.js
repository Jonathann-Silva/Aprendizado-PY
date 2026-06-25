// Exercício 059: Módulo Readline - Fluxo Sequencial
// Objetivo: Fazer perguntas sequenciais no terminal encadeando callbacks do Readline.
//
// Instruções:
// 1. Crie a interface readline padrão (`stdin` e `stdout`).
// 2. Faça a primeira pergunta: "Qual o seu nome? ".
// 3. Dentro do callback do nome, faça a segunda pergunta: "Qual a sua idade? ".
// 4. No segundo callback, imprima no console: "Cadastro: [nome], [idade] anos."
// 5. Encerre o readline.
//
// Saída esperada no terminal:
// Qual o seu nome? Ana
// Qual a sua idade? 28
// Cadastro: Ana, 28 anos.
//
// Para executar este arquivo, use o comando: node ex059.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Perguntar cidade e estado em sequência usando readline encadeado.
//
// const readline = require('readline');
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// rl.question('Qual a sua cidade? ', (cidade) => {
//   rl.question('Qual o seu estado? ', (estado) => {
//     console.log(`Cidade: ${cidade} - ${estado}`);
//     rl.close();
//   });
// });
// ====================================================================

// Escreva seu código abaixo:


