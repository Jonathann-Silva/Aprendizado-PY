// Exercício 057: Descompressão com Zlib (Gunzip)
// Objetivo: Descompactar um arquivo .gz de volta para o formato de texto original.
//
// Preparação: Este exercício assume que você executou o ex056.js e gerou o arquivo `dados.txt.gz`. O script de geração também garantiu a existência do arquivo `dados.txt.gz` de backup.
//
// Instruções:
// 1. Importe `fs` e `zlib`.
// 2. Crie um stream de leitura de `dados.txt.gz`.
// 3. Crie um stream de escrita para `dados_extraidos.txt`.
// 4. Instancie o descompactador usando `zlib.createGunzip()`.
// 5. Conecte os pipes: `readStream.pipe(gunzip).pipe(writeStream)`.
// 6. Ao finalizar, imprima: "Arquivo descompactado com sucesso!"
//
// Saída esperada no terminal:
// Arquivo descompactado com sucesso!
//
// Para executar este arquivo, use o comando: node ex057.js

// Escreva seu código abaixo:

