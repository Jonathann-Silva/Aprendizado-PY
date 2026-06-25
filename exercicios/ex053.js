// Exercício 053: Streams - Readable Stream
// Objetivo: Ler arquivos grandes em blocos (chunks) sequenciais para otimizar consumo de memória.
//
// Preparação: O script de geração criou um arquivo `dados_grandes.txt` nesta pasta com um texto repetido.
//
// Instruções:
// 1. Use o módulo `fs` para criar um Readable Stream de leitura do arquivo `dados_grandes.txt` usando `fs.createReadStream()`. Defina o `highWaterMark` como 64 (para ler de 64 em 64 bytes).
// 2. Adicione ouvintes para os eventos:
//    - `data`: Para cada bloco lido, imprima: "Chunk lido com [tamanho] bytes".
//    - `end`: Quando a leitura terminar, imprima: "Leitura concluída com [quantidade] chunks."
//
// Saída esperada no terminal:
// Chunk lido com 64 bytes
// Chunk lido com 64 bytes
// ...
// Leitura concluída com X chunks.
//
// Para executar este arquivo, use o comando: node ex053.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Ler logs em blocos (chunks) de 30 bytes usando Readable Stream.
//
// const fs = require('fs');
// const readStream = fs.createReadStream('registro.log', { highWaterMark: 30 });
// readStream.on('data', chunk => console.log('Chunk lido:', chunk.toString()));
// ====================================================================

// Escreva seu código abaixo:


