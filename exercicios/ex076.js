// Exercício 076: Servidor e Cliente UDP
// Objetivo: Enviar e receber mensagens sem conexão estruturada de sockets usando o protocolo UDP.
//
// Instruções:
// 1. Importe o módulo `dgram`.
// 2. Crie um socket servidor UDP usando `dgram.createSocket('udp4')`.
// 3. Configure o servidor para ouvir na porta `5000` usando `.bind(5000)`.
// 4. No evento `message` do servidor, imprima: "Mensagem recebida: [msg]" e chame `server.close()`.
// 5. Crie um cliente UDP temporário no mesmo arquivo e envie a mensagem "Olá via UDP!" para a porta 5000 de "localhost" usando `.send()`.
//
// Saída esperada no terminal:
// Servidor UDP ativo na porta 5000
// Mensagem recebida: Olá via UDP!
//
// Para executar este arquivo, use o comando: node ex076.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Servidor UDP recebendo logs rápidos de métricas de rede na porta 6000.
//
// const dgram = require('dgram');
// const socket = dgram.createSocket('udp4');
// socket.on('message', (msg) => console.log('Métrica:', msg.toString()));
// socket.bind(6000);
// ====================================================================

// Escreva seu código abaixo:


