// Exercício 068: Promise.allSettled
// Objetivo: Executar várias Promises em paralelo e obter o estado e resultado de cada uma, mesmo as que falharem.
//
// Instruções:
// 1. Crie três Promises:
//    - `p1`: resolve em 100ms com "Sucesso 1"
//    - `p2`: rejeita em 200ms com um erro "Erro de rede"
//    - `p3`: resolve em 300ms com "Sucesso 2"
// 2. Use `Promise.allSettled([p1, p2, p3])`.
// 3. Percorra o array de resultados e imprima para cada item: "Status [index]: [status] | Valor/Razão: [value ou reason]".
//
// Saída esperada no terminal:
// Status 1: fulfilled | Valor: Sucesso 1
// Status 2: rejected | Razão: Erro de rede
// Status 3: fulfilled | Valor: Sucesso 2
//
// Para executar este arquivo, use o comando: node ex068.js

// Escreva seu código abaixo:

