// Exercício 030: Módulos Customizados
// Objetivo: Dividir o código em múltiplos arquivos criando um módulo personalizado e importando-o.
//
// Preparação: O script de geração criou um arquivo auxiliar `calculadora.js` nesta pasta com o seguinte código:
// function somar(a, b) { return a + b; }
// module.exports = { somar };
//
// Instruções:
// 1. Importe o arquivo da calculadora usando `const calc = require('./calculadora');`.
// 2. Execute a função `calc.somar(10, 15)`.
// 3. Imprima no console o resultado no formato: "Resultado da soma: [resultado]"
//
// Saída esperada no terminal:
// Resultado da soma: 25
//
// Para executar este arquivo, use o comando: node ex030.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Criar um conversor de moedas em outro arquivo e importá-lo usando require.
//
// // Em conversor.js:
// // function realParaDolar(reais) { return reais * 0.20; }
// // module.exports = { realParaDolar };
// //
// // Em ex030.js:
// // const conv = require('./conversor');
// // console.log('Em dólares:', conv.realParaDolar(100));
// ====================================================================

// Escreva seu código abaixo:


