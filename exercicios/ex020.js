// Exercício 020: Eventos personalizados básico
// Objetivo: Entender a arquitetura orientada a eventos do Node usando a classe `EventEmitter`.
//
// Instruções:
// 1. Importe a classe `EventEmitter` do módulo nativo `'events'`: `const EventEmitter = require('events');`
// 2. Crie uma nova instância dessa classe: `const emissor = new EventEmitter();`
// 3. Registre um ouvinte para um evento chamado "saudar" usando `emissor.on('saudar', () => { ... })`. Dentro dele, imprima: "Olá! Um evento foi acionado!"
// 4. Dispare o evento usando `emissor.emit('saudar')`.
//
// Saída esperada no terminal:
// Olá! Um evento foi acionado!
//
// Para executar este arquivo, use o comando: node ex020.js

// Escreva seu código abaixo:
