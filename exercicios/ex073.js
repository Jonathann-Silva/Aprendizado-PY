// Exercício 073: Event Emitter - Remover Ouvintes
// Objetivo: Desvincular ouvintes de eventos registrados anteriormente de forma dinâmica.
//
// Instruções:
// 1. Instancie o `EventEmitter`.
// 2. Defina uma função de callback chamada `enviarMensagem(texto)` que imprime a mensagem recebida.
// 3. Registre essa função no evento "mensagem" usando `.on()`.
// 4. Emita o evento com o texto "Olá!".
// 5. Remova o ouvinte usando `.removeListener()` ou `.off()`.
// 6. Emita o evento de novo com "Tudo bem?". Nada deve aparecer no terminal na segunda emissão.
//
// Saída esperada no terminal:
// Mensagem recebida: Olá!
// (Segunda emissão deve ser silenciosa)
//
// Para executar este arquivo, use o comando: node ex073.js

// Escreva seu código abaixo:

