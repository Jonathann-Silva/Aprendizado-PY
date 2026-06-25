// Exercício 075: Cliente TCP Básico
// Objetivo: Conectar-se a um servidor TCP aberto na rede e consumir as mensagens transmitidas.
//
// Instruções:
// 1. Importe o módulo `net`.
// 2. Use a função `net.connect({ port: 4000 })` para se conectar ao servidor do exercício anterior.
// 3. Ao conectar (evento `connect`), imprima: "Conectado ao servidor TCP!".
// 4. Escute o evento `data` para ler os dados recebidos do servidor e imprima no terminal: "Mensagem do servidor: [dados]".
// 5. Quando a conexão fechar, imprima: "Conexão encerrada pelo servidor."
//
// Saída esperada no terminal:
// Conectado ao servidor TCP!
// Mensagem do servidor: Olá do Servidor TCP!
// Conexão encerrada pelo servidor.
//
// Para executar este arquivo, use o comando: node ex075.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Conectar-se ao servidor de data/hora TCP na porta 5050.
//
// const net = require('net');
// const client = net.connect({ port: 5050 }, () => {
//   client.on('data', data => console.log('Data Recebida:', data.toString()));
// });
// ====================================================================

// Escreva seu código abaixo:


