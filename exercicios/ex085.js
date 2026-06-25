// Exercício 085: Event Loop - Microtasks vs Macrotasks
// Objetivo: Identificar a precedência de Promises resolvidas em relação a temporizadores comuns.
//
// Instruções:
// 1. Imprima a mensagem síncrona "Código Síncrono".
// 2. Crie um `setTimeout` de 0ms que imprima "setTimeout executado (Macrotask)".
// 3. Crie uma `Promise.resolve()` e adicione um `.then()` que imprima "Promise resolvida (Microtask)".
// 4. Observe qual das duas operações assíncronas é disparada primeiro pelo Event Loop.
//
// Saída esperada no terminal:
// Código Síncrono
// Promise resolvida (Microtask)
// setTimeout executado (Macrotask)
//
// Para executar este arquivo, use o comando: node ex085.js

// Escreva seu código abaixo:

