// Exercício 005: Manipulação de caminhos
// Objetivo: Usar o módulo nativo `path` para juntar caminhos de diretórios de forma segura.
//
// Instruções:
// 1. Importe o módulo nativo `path` usando `require('path')`.
// 2. Use a função `path.join()` para unir os caminhos "documentos", "fotos" e "ferias.jpg".
// 3. Imprima o caminho gerado no console.
// Nota: O Node.js cuidará de usar a barra invertida (\) no Windows ou barra comum (/) no Linux/macOS.
//
// Saída esperada no terminal (no Windows):
// documentos\fotos\ferias.jpg
//
// Para executar este arquivo, use o comando: node ex005.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Extrair o diretório pai e verificar se um caminho é absoluto.
//
// const path = require('path');
// const meuCaminho = '/home/usuario/fotos/ferias.png';
// console.log(`Pasta contendo o arquivo: ${path.dirname(meuCaminho)}`);
// console.log(`O caminho é absoluto? ${path.isAbsolute(meuCaminho)}`);
// ====================================================================

// Escreva seu código abaixo:


