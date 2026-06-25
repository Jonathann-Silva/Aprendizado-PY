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

// Escreva seu código abaixo:
