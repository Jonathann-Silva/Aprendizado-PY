// Exercício 080: HTTP Server - Servir Arquivos Estáticos
// Objetivo: Criar um servidor web básico capaz de ler e enviar arquivos reais do sistema operacional de forma dinâmica.
//
// Preparação: O script de geração criou um arquivo `index.html` básico nesta pasta.
//
// Instruções:
// 1. Importe os módulos `http`, `fs` e `path`.
// 2. Crie um servidor HTTP na porta `3000`.
// 3. Quando receber uma requisição, use `fs.readFile` para ler o arquivo `index.html` desta pasta.
// 4. Defina o cabeçalho `Content-Type` como `text/html; charset=utf-8` e responda com o conteúdo lido.
// 5. Se o arquivo não existir, responda com erro 404.
//
// Saída esperada no terminal:
// Servidor rodando na porta 3000...
// Arquivo index.html servido.
//
// Para executar este arquivo, use o comando: node ex080.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Servir arquivo de estilo styles.css do diretório público.
//
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res) => {
//   fs.readFile('./style.css', (err, data) => {
//     res.writeHead(200, { 'Content-Type': 'text/css' });
//     res.end(data);
//   });
// }).listen(3000);
// ====================================================================

// Escreva seu código abaixo:


