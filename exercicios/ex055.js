// Exercício 055: Stream Piping
// Objetivo: Redirecionar a saída de um Readable Stream diretamente para a entrada de um Writable Stream.
//
// Preparação: O script de geração criou um arquivo `origem.txt` com o texto "Conteúdo copiado via pipe!".
//
// Instruções:
// 1. Crie um stream de leitura para `origem.txt`.
// 2. Crie um stream de escrita para `destino.txt`.
// 3. Conecte os dois usando o método `.pipe()` do stream de leitura.
// 4. Adicione um ouvinte para o evento `close` no stream de escrita para imprimir "Arquivo copiado com sucesso via pipe!" quando finalizado.
//
// Saída esperada no terminal:
// Arquivo copiado com sucesso via pipe!
//
// Para executar este arquivo, use o comando: node ex055.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Copiar um arquivo de texto para um backup usando pipe.
//
// const fs = require('fs');
// fs.createReadStream('dados.txt').pipe(fs.createWriteStream('dados_backup.txt'));
// ====================================================================

// Escreva seu código abaixo:


