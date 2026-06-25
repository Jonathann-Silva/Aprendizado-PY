// Exercício 063: Módulo URL
// Objetivo: Analisar e extrair partes individuais de um endereço web completo.
//
// Instruções:
// 1. Importe a classe `URL` do módulo `url` (ou use a global `URL`).
// 2. Instancie um objeto URL para o seguinte endereço:
//    `https://exemplo.com.br:8080/produtos?categoria=livros&ordem=preco`
// 3. Extraia e imprima no console os componentes do endereço: protocolo, host (com porta), pathname (caminho) e a query string (parâmetros de busca).
//
// Saída esperada no terminal:
// Protocolo: https:
// Host: exemplo.com.br:8080
// Caminho: /produtos
// Parâmetros: categoria=livros, ordem=preco
//
// Para executar este arquivo, use o comando: node ex063.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Extrair parâmetros de busca de uma URL interna de busca.
//
// const { URL } = require('url');
// const url = new URL('https://loja.com/busca?q=tenis&cor=azul');
// console.log(url.searchParams.get('q'), url.searchParams.get('cor'));
// ====================================================================

// Escreva seu código abaixo:


