// ==========================================
// Desafio de Código: Classificação por Média
// Plataforma: DIO (Digital Innovation One)
// ==========================================

// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário
// - "print": imprime um texto de saída (output), pulando linha automaticamente

// Lê o valor da média informado na entrada
let media = gets();

// 1. Primeira condição: notas abaixo de 5 resultam em Reprovado
if (media < 5) {
  print('REP');

// 2. Segunda condição: intervalo entre 5 (inclusivo) e menor que 7 (exclusivo)
// O operador lógico "&&" (E) garante que ambas as condições sejam verdadeiras
} else if (media >= 5 && media < 7) {
  print('REC');

// 3. Caso contrário: notas a partir de 7 resultam em Aprovado
} else {
  print('APR');
}
