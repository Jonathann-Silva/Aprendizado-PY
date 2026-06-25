// Exercício 084: setImmediate vs process.nextTick
// Objetivo: Compreender a ordem de prioridades e fases na pilha de execução do loop de eventos.
//
// Instruções:
// 1. Imprima "Início".
// 2. Adicione um `setTimeout` com tempo 0 e imprima "setTimeout (0ms)".
// 3. Adicione um `setImmediate` e imprima "setImmediate".
// 4. Adicione um `process.nextTick` e imprima "nextTick".
// 5. Imprima "Fim".
// 6. Observe a ordem dos prints que aparecem no console.
//
// Saída esperada no terminal:
// Início
// Fim
// nextTick
// setImmediate
// setTimeout (0ms)
//
// Para executar este arquivo, use o comando: node ex084.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Rodar verificação rápida de estado usando process.nextTick antes de microtasks.
//
// process.nextTick(() => console.log('Executa imediatamente após código atual síncrono'));
// setImmediate(() => console.log('Executa na fase Check do Event Loop'));
// ====================================================================

// Escreva seu código abaixo:


