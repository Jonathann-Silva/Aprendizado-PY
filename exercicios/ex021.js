// Exercício 021: Eventos com passagem de argumentos
// Objetivo: Disparar eventos personalizados enviando dados adicionais aos ouvintes.
//
// Instruções:
// 1. Importe a classe `EventEmitter` do módulo `'events'`.
// 2. Crie a instância `emissor`.
// 3. Registre um ouvinte para o evento "login" que receba um argumento `usuario`. Dentro dele, imprima: "O usuário [usuario] acabou de fazer login!"
// 4. Dispare o evento "login" passando o nome "Carlos" como segundo argumento no método `.emit()`.
//
// Saída esperada no terminal:
// O usuário Carlos acabou de fazer login!
//
// Para executar este arquivo, use o comando: node ex021.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Emitir dados de um login de usuário no evento de autenticação.
//
// const EventEmitter = require('events');
// const portal = new EventEmitter();
// portal.on('login', (usuario, ip) => {
//   console.log(`Usuário ${usuario} conectou a partir do IP: ${ip}`);
// });
// portal.emit('login', 'jonathan', '192.168.1.10');
// ====================================================================

// Escreva seu código abaixo:


