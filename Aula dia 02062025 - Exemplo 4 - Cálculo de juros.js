/*
Exemplo 4 - Aula dia 02/06/2025 

Cálculo de juros:
 
- Juros simples -> (tempo, valor, taxa)
- Juros compostos -> (tempo, valor, taxa)
- Montante -> (tempo, valor, taxa) - Montante para juros simples e jujos compostos
- Juros condicional -> Se o tempo é menor que 12 meses, se for igual ou maior que 12, são jusros compostos

Obs: Funções curryficadas.

- Parcial para período de 6 meses e para 12 meses.
- Tentar verificar a aplicação parcial usando "funcional"
*/

//J = C * i * t, onde J é o valor dos juros, C é o capital inicial, i é a taxa de juros e t é o tempo da aplicação.
jurosSimples = (c) => (i) => (t) => c * i * t

// M = C * (1 + i)^t, onde M é o montante final, C é o capital inicial, i é a taxa de juros e t é o tempo de investimento.
jurosCompostos = (c) => (i) => (t) =>  c * (1 + i) ** t

c = 1000.00
i = 5.00
t1 = 65
t2 = 2

montanteSimples = jurosSimples(c)(i)(t1)
console.log(montanteSimples)

montanteComposto = jurosCompostos(c)(i)(t1)
console.log(montanteComposto)

jusrosCondicional = (t) => (t < 12) ? jurosSimples(c)(i)(t) : jurosSimples(c)(i)(t)

console.log(jusrosCondicional(6))
console.log(jusrosCondicional(12))