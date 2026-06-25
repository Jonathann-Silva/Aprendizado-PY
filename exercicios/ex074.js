// Exercício 074: Servidor TCP Básico
// Objetivo: Criar um servidor de rede raw no protocolo TCP usando o módulo net.
//
// Instruções:
// 1. Importe o módulo `net`.
// 2. Use a função `net.createServer()` para escutar conexões.
// 3. Quando um cliente se conectar, imprima no console: "Cliente conectado!".
// 4. Escreva no socket do cliente a mensagem "Olá do Servidor TCP!\n" usando `socket.write()` e encerre o socket com `socket.end()`.
// 5. Inicialize o servidor ouvindo na porta `4000`.
//
// Saída esperada no terminal:
// Servidor TCP aguardando conexões na porta 4000...
// (Quando conectar: "Cliente conectado!")
//
// Para executar este arquivo, use o comando: node ex074.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Servidor TCP na porta 5050 respondendo com data/hora.
//
// const net = require('net');
// const server = net.createServer(socket => {
//   socket.write(new Date().toString() + '\n');
//   socket.end();
// });
// server.listen(5050);
// ====================================================================

// Escreva seu código abaixo:


