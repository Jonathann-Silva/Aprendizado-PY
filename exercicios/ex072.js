// Exercício 072: Event Emitter - Execução Única (once)
// Objetivo: Registrar ouvintes de evento que expiram logo após serem acionados uma única vez.
//
// Instruções:
// 1. Importe a classe `EventEmitter` do módulo `events`.
// 2. Instancie um emissor de eventos.
// 3. Use o método `.once()` para registrar um ouvinte para o evento "clique". O callback deve imprimir "Evento recebido apenas uma vez!".
// 4. Dispare o evento "clique" duas vezes consecutivas com o método `.emit()`.
// 5. Observe a saída no console.
//
// Saída esperada no terminal:
// Evento recebido apenas uma vez!
//
// Para executar este arquivo, use o comando: node ex072.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Executar carregamento inicial do app no evento 'ready' apenas uma vez.
//
// const EventEmitter = require('events');
// const app = new EventEmitter();
// app.once('ready', () => console.log('App pronto!'));
// app.emit('ready');
// app.emit('ready'); // não dispara de novo
// ====================================================================

// Escreva seu código abaixo:


