// Exercício 019: Lendo parâmetros da URL
// Objetivo: Usar a classe global `URL` do Node para analisar uma URL e extrair parâmetros de busca (Query Strings).
//
// Instruções:
// 1. Crie uma string contendo uma URL completa de exemplo: `const urlString = 'https://exemplo.com/busca?produto=notebook&preco=3000';`
// 2. Crie uma nova instância da classe URL usando `const minhaUrl = new URL(urlString);`
// 3. Use `minhaUrl.searchParams.get('produto')` e `minhaUrl.searchParams.get('preco')` para ler os parâmetros.
// 4. Imprima no console no formato: "Produto buscado: notebook | Preço máximo: 3000"
//
// Saída esperada no terminal:
// Produto buscado: notebook | Preço máximo: 3000
//
// Para executar este arquivo, use o comando: node ex019.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Ler o parâmetro '?busca=javascript' da URL e responder com o termo de busca.
//
// const http = require('http');
// const url = require('url');
// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const busca = parsedUrl.query.busca || 'nada';
//   res.end(`Termo pesquisado: ${busca}`);
// });
// server.listen(8080);
// ====================================================================

// Escreva seu código abaixo:


