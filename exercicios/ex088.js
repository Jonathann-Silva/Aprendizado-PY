// Exercício 088: Clonagem - structuredClone()
// Objetivo: Copiar de forma profunda objetos aninhados garantindo isolamento total de referências.
//
// Instruções:
// 1. Crie um objeto original com estrutura profunda:
//    `const original = { nome: 'Ana', endereco: { cidade: 'São Paulo' } };`
// 2. Crie uma cópia profunda (deep clone) usando a função nativa `structuredClone()`.
// 3. Altere a propriedade `cidade` do objeto clonado para "Rio de Janeiro".
// 4. Imprima no console o valor de `cidade` do objeto original e da cópia clonada para provar que a alteração não se propagou.
//
// Saída esperada no terminal:
// Original Cidade: São Paulo
// Clone Cidade: Rio de Janeiro
//
// Para executar este arquivo, use o comando: node ex088.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Copiar matrizes (arrays bidimensionais) isolando suas referências de memória.
//
// const original = [[1, 2], [3, 4]];
// const clone = structuredClone(original);
// clone[0][0] = 99;
// console.log(original[0][0]); // 1 (não alterado)
// ====================================================================

// Escreva seu código abaixo:


