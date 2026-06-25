// Exercício 022: Trabalhando com JSON - Leitura e parsing
// Objetivo: Ler um arquivo contendo dados em formato JSON e transformá-lo em um objeto JavaScript utilizável.
//
// Preparação: O script de geração criou um arquivo `dados.json` na mesma pasta com o seguinte conteúdo:
// { "usuario": "Ana", "nivel": "administrador" }
//
// Instruções:
// 1. Importe o módulo `fs`.
// 2. Leia o arquivo `dados.json` de forma síncrona com codificação 'utf8'.
// 3. Use `JSON.parse()` para converter o texto lido em um objeto JavaScript.
// 4. Imprima no console o valor do atributo `usuario` e do atributo `nivel`.
//
// Saída esperada no terminal:
// Nome do usuário: Ana | Nível de acesso: administrador
//
// Para executar este arquivo, use o comando: node ex022.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Ler um arquivo JSON de configurações e extrair o Host de banco de dados.
//
// const fs = require('fs');
// const raw = fs.readFileSync('config.json', 'utf8');
// const config = JSON.parse(raw);
// console.log(`Banco de dados Host: ${config.db_host}`);
// ====================================================================

// Escreva seu código abaixo:


