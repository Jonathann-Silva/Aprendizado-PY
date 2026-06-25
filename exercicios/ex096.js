// Exercício 096: Mapeamento de Cluster
// Objetivo: Configurar redundância escalando servidores por múltiplos processos filhos correspondentes ao número de cores do processador.
//
// Instruções:
// 1. Importe o módulo `cluster` e `os`.
// 2. Verifique se o processo atual é primário com `cluster.isPrimary` (ou `cluster.isMaster` em versões legadas).
// 3. Se for primário, imprima: "Processo primário [PID] ativo.". Em seguida, execute a criação de 2 processos filhos usando `cluster.fork()`.
// 4. Se for worker, imprima: "Worker [PID] iniciado." e finalize o processo com `process.exit(0)`.
// 5. Nota: Use a propriedade `process.pid` para pegar os códigos de identificadores de processos.
//
// Saída esperada no terminal:
// Processo primário [PID] ativo.
// Worker [PID] iniciado.
// Worker [PID] iniciado.
//
// Para executar este arquivo, use o comando: node ex096.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Escalonar 4 instâncias de workers em cluster.
//
// const cluster = require('cluster');
// if (cluster.isPrimary) {
//   for (let i = 0; i < 4; i++) cluster.fork();
// }
// ====================================================================

// Escreva seu código abaixo:


