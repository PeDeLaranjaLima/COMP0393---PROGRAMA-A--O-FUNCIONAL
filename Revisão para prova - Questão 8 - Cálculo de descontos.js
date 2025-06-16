const aplicaDesc = (d) => (p) => ((d - 100)/100) * -p // Calcula o preço com desconto, levando o exemplo de d = 10, temos (d/100) * p retorna apenas 10% do preço
                                                      // o objetivo é retornar 90% do valor, assim é poss´vel retornar qualquer valor de porcentage,

const aplicaDesc10 = aplicaDesc(10) // Aplicação parcial da função de porcentagem para calcular 10% do preço total
const aplicaDesc20 = aplicaDesc(20) // Aplicação parcial da função de porcentagem para calcular 20% do preço total
const aplicaDesc50 = aplicaDesc(50) // Aplicação parcial da função de porcentagem para calcular 50% do preço total

// Aplicação das funções de porcentagem para cada preço
console.log(aplicaDesc10(210))
console.log(aplicaDesc20(210))
console.log(aplicaDesc50(210))