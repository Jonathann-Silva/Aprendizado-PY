// Exercício 083: Temporizadores - Cancelamento
// Objetivo: Programar tarefas com atraso e cancelá-las antes de entrarem na fila de execução do Event Loop.
//
// Instruções:
// 1. Imprima "Iniciando temporizadores...".
// 2. Crie um temporizador usando `setTimeout()` programado para 3 segundos que deve imprimir "Executado!". Guarde o ID retornado.
// 3. Crie outro temporizador imediato ou execute código síncrono que chame `clearTimeout()` passando o ID obtido.
// 4. Imprima "Temporizador cancelado com sucesso!".
//
// Saída esperada no terminal:
// Iniciando temporizadores...
// Temporizador cancelado com sucesso!
//
// Para executar este arquivo, use o comando: node ex083.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Iniciar contagem de 5s para deletar conta, mas cancelar ao apertar botão.
//
// const timeoutId = setTimeout(() => console.log('Conta deletada!'), 5000);
// // Cancelando:
// clearTimeout(timeoutId);
// ====================================================================

// Escreva seu código abaixo:


