// Exercício 087: RegExp - Captura de Grupos
// Objetivo: Desestruturar strings complexas e extrair dados agrupados usando parênteses de captura.
//
// Instruções:
// 1. Crie uma expressão regular para capturar datas no padrão AAAA-MM-DD.
// 2. Use parênteses para agrupar o ano (4 dígitos), o mês (2 dígitos) e o dia (2 dígitos). Ex: `/(\d{4})-(\d{2})-(\d{2})/`.
// 3. Use o método `.exec()` ou `.match()` da String passando a data "2026-06-25".
// 4. Extraia os dados de grupo correspondentes (índices 1, 2 e 3 do retorno) e imprima no formato: "Ano: [ano] | Mês: [mes] | Dia: [dia]".
//
// Saída esperada no terminal:
// Ano: 2026 | Mês: 06 | Dia: 25
//
// Para executar este arquivo, use o comando: node ex087.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Extrair código de DDD e telefone de um número formatado '(11) 99999-9999'.
//
// const telRegex = /\((\d{2})\)\s(\d{5}-\d{4})/;
// const match = telRegex.exec('(11) 99999-8888');
// console.log('DDD:', match[1], 'Telefone:', match[2]);
// ====================================================================

// Escreva seu código abaixo:


