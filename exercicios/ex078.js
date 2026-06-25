// Exercício 078: HTTP Server - Retornando JSON
// Objetivo: Criar uma API HTTP nativa que responde a requisições com cabeçalhos e payloads em formato JSON.
//
// Instruções:
// 1. Importe o módulo `http`.
// 2. Crie um servidor na porta `3000`.
// 3. Defina os cabeçalhos de resposta: status 200 e `Content-Type` como `application/json`.
// 4. Envie como resposta um objeto convertido em string contendo `{ status: 'ativo', mensagem: 'API online' }`.
// 5. Adicione um console.log no script para mostrar quando o servidor inicializa.
//
// Saída esperada no terminal:
// Servidor rodando em http://localhost:3000
// Resposta JSON enviada.
//
// Para executar este arquivo, use o comando: node ex078.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Servidor que retorna lista de produtos em JSON.
//
// const http = require('http');
// http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify([{ id: 1, nome: 'Tênis' }]));
// }).listen(3000);
// ====================================================================

// Escreva seu código abaixo:


