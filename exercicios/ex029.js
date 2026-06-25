// Exercício 029: Finalizar processos com códigos de saída
// Objetivo: Entender como interromper a execução do Node voluntariamente com códigos de status usando `process.exit()`.
//
// Instruções:
// 1. O objeto global `process` permite finalizar o script de forma forçada.
// 2. Se passamos 0: `process.exit(0)`, significa que o programa terminou com sucesso (sem erros).
// 3. Se passamos qualquer outro número (ex: 1): `process.exit(1)`, significa que ocorreu um erro.
// 4. Crie uma variável `erroOcorreu = true`.
// 5. Se `erroOcorreu` for verdadeiro, imprima "Erro crítico detectado! Encerrando..." e execute `process.exit(1)`.
// 6. Caso contrário, imprima "Tudo certo!" e finalize com `process.exit(0)`.
// Note que qualquer código depois do `process.exit` não será executado.
//
// Saída esperada no terminal:
// Erro crítico detectado! Encerrando...
// (E o terminal fecha a execução imediatamente)
//
// Para executar este arquivo, use o comando: node ex029.js

// Escreva seu código abaixo:
