// Exercício 060: Child Process - exec()
// Objetivo: Executar comandos externos do sistema operacional a partir de um script Node.js.
//
// Instruções:
// 1. Importe a função `exec` do módulo `child_process`.
// 2. Use `exec` para rodar o comando: `node -v` (para ver a versão do Node instalada).
// 3. O callback de `exec` recebe `error, stdout, stderr`.
// 4. Se houver erro, imprima o erro. Caso contrário, imprima o retorno no console formatado como: "Versão do Node.js instalada: [stdout]".
//
// Saída esperada no terminal:
// Versão do Node.js instalada: vXX.XX.XX
//
// Para executar este arquivo, use o comando: node ex060.js
//
// ====================================================================
// EXEMPLO SIMILAR / CONCEITO:
//
// Exemplo similar: Executar comando de listagem de arquivos da pasta usando exec.
//
// const { exec } = require('child_process');
// exec('echo Olá do Node', (err, stdout) => console.log(stdout));
// ====================================================================

// Escreva seu código abaixo:


