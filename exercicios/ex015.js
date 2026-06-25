// Exercício 015: Temporizadores e execução em intervalo
// Objetivo: Entender o Event Loop do Node usando `setInterval` para repetir uma ação e `clearInterval` para pará-la.
//
// Instruções:
// 1. Crie um contador iniciando em 1.
// 2. Use `const intervalo = setInterval(() => { ... }, 1000)` para rodar uma função a cada 1 segundo.
// 3. Dentro da função, imprima: "Contagem: [contador]".
// 4. Se o contador chegar a 5, use `clearInterval(intervalo)` para interromper a execução e imprima "Fim da contagem!".
// 5. Lembre-se de incrementar o contador a cada execução.
//
// Saída esperada no terminal:
// Contagem: 1 (após 1s)
// Contagem: 2 (após 2s)
// Contagem: 3 (após 3s)
// Contagem: 4 (após 4s)
// Contagem: 5 (após 5s)
// Fim da contagem!
// (e o programa deve finalizar sozinho)
//
// Para executar este arquivo, use o comando: node ex015.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Disparar mensagem de alerta após 3 segundos, e piscar um LED (simulado) a cada 200ms.
//
// setTimeout(() => console.log('Tempo esgotado!'), 3000);
// let piscadas = 1;
// const tId = setInterval(() => {
//   console.log('Piscando LED...');
//   piscadas++;
//   if (piscadas > 5) clearInterval(tId);
// }, 200);
// ====================================================================

// Escreva seu código abaixo:


