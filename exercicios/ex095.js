// Exercício 095: FS - Monitoramento de Arquivos (watch)
// Objetivo: Capturar e ouvir em tempo real eventos de modificações no sistema de arquivos.
//
// Preparação: O script de geração criou um arquivo `monitor.txt` nesta pasta.
//
// Instruções:
// 1. Use a função `fs.watch()` para observar alterações feitas no arquivo `monitor.txt`.
// 2. O callback recebe `eventType` e `filename`. Se houver alteração, imprima no console: "Arquivo alterado! Evento: [eventType]".
// 3. Use um `setTimeout()` de 1 segundo para alterar o conteúdo do arquivo via `fs.appendFileSync` e simular a modificação.
// 4. Encerre o monitor de watch usando `watcher.close()` após 2 segundos para o processo node não ficar travado aberto.
//
// Saída esperada no terminal:
// Monitorando mudanças em monitor.txt...
// Arquivo alterado! Evento: change
//
// Para executar este arquivo, use o comando: node ex095.js

// Escreva seu código abaixo:

