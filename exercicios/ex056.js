// Exercício 056: Compressão com Zlib (Gzip)
// Objetivo: Compactar um arquivo de texto no formato Gzip usando streams do Node.js.
//
// Preparação: O script de geração criou um arquivo `dados.txt` nesta pasta com dados para compactar.
//
// Instruções:
// 1. Importe os módulos `fs` e `zlib`.
// 2. Crie um stream de leitura de `dados.txt`.
// 3. Crie um stream de escrita para `dados.txt.gz`.
// 4. Instancie o compactador gzip usando `zlib.createGzip()`.
// 5. Conecte a leitura, passando pelo compactador gzip e desaguando na escrita usando pipe: `readStream.pipe(gzip).pipe(writeStream)`.
// 6. Quando o stream de escrita disparar o evento `finish`, imprima: "Arquivo compactado com sucesso!"
//
// Saída esperada no terminal:
// Arquivo compactado com sucesso!
//
// Para executar este arquivo, use o comando: node ex056.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Compactar arquivo de configuração usando Streams e Zlib Gzip.
//
// const fs = require('fs');
// const zlib = require('zlib');
// fs.createReadStream('origem.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('origem.txt.gz'));
// ====================================================================

// Escreva seu código abaixo:


