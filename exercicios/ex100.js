// Exercício 100: Desafio Final - Miniprojeto Sistema de Log Compactado
// Objetivo: Consolidar conhecimentos integrando manipulação assíncrona de arquivos, Streams, Crypto e Zlib em um fluxo unificado de processamento.
//
// Preparação: O script de geração criou um arquivo `registro.log` básico nesta pasta.
//
// Instruções:
// 1. Implemente um fluxo de processamento de logs seguro:
//    - Crie uma função assíncrona principal `processarLogs()`.
//    - Crie um stream de leitura para `registro.log`.
//    - Crie um stream de escrita direcionado para `registro.log.enc.gz`.
//    - Crie um cifrador usando o módulo `crypto` (ex: algoritmo `aes-256-ctr` com chave e IV simples).
//    - Crie um compactador Gzip usando o módulo `zlib`.
//    - Encadeie os streams usando pipes: leitura -> cifrador -> compactador gzip -> escrita.
//    - Quando a escrita terminar (evento finish), imprima: "Processamento concluído. Arquivo de log final gerado com segurança!" e leia as estatísticas do arquivo gerado (`fs.statSync()`) imprimindo o tamanho em bytes do arquivo gerado.
// 2. Chame a função `processarLogs()` e capture erros se ocorrerem.
//
// Saída esperada no terminal:
// Processamento concluído. Arquivo de log final gerado com segurança!
// Tamanho do arquivo compactado e criptografado: XX bytes
//
// Para executar este arquivo, use o comando: node ex100.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Mini-sistema de backup que lê uma pasta de uploads, junta arquivos em tar, encripta e compacta.
//
// // Combina Readable stream, Zlib Gzip, Crypto Cipher e fs.createWriteStream em um único fluxo de pipe sequencial.
// // fs.createReadStream('src.txt').pipe(cipher).pipe(gzip).pipe(fs.createWriteStream('dst.txt.enc.gz'));
// ====================================================================

// Escreva seu código abaixo:


