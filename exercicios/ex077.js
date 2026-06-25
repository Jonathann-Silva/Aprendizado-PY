// Exercício 077: HTTP Server - POST Request Body
// Objetivo: Aprender a coletar e concatenar dados fragmentados enviados no corpo de requisições POST HTTP nativas.
//
// Instruções:
// 1. Importe o módulo `http`.
// 2. Crie um servidor na porta `3000`. No callback, verifique se a rota é `/cadastro` e o método é `POST`.
// 3. Crie uma variável para acumular o corpo. Ouça os eventos `data` da requisição (`req`) para acumular os pedaços recebidos em formato string.
// 4. No evento `end`, faça o parsing de JSON e imprima no console: "Corpo da requisição recebido: [objeto]". Envie uma resposta de sucesso (200) com "Cadastro realizado!".
//
// Saída esperada no terminal:
// Servidor HTTP aguardando POST na porta 3000...
// (Quando enviar POST: "Corpo da requisição recebido: { nome: 'João' }")
//
// Para executar este arquivo, use o comando: node ex077.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Receber corpo de texto simples de postagem e salvar em string.
//
// const http = require('http');
// http.createServer((req, res) => {
//   let body = '';
//   req.on('data', c => body += c);
//   req.on('end', () => { res.end('Recebido: ' + body); });
// }).listen(3000);
// ====================================================================

// Escreva seu código abaixo:


