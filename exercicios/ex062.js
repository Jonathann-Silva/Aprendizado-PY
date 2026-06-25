// Exercício 062: Módulo Util - Promisify
// Objetivo: Converter funções que usam callback clássico para retornar Promises.
//
// Instruções:
// 1. Importe o módulo `fs` e a função `promisify` do módulo `util`.
// 2. Crie uma versão baseada em Promise da função `fs.readFile` chamada `readFilePromise` usando `promisify`.
// 3. Leia o arquivo `dados.json` da pasta usando `readFilePromise`.
// 4. Trate o resultado com `.then()` e imprima o conteúdo no formato: "Conteúdo lido com promisify: [conteudo]".
//
// Saída esperada no terminal:
// Conteúdo lido com promisify: {"nome": "Teste", "valor": 123}
//
// Para executar este arquivo, use o comando: node ex062.js

// Escreva seu código abaixo:

