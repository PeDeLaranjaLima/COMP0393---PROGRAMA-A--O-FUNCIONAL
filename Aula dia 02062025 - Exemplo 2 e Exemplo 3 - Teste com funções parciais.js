// Aula do dia 02/06/2025 -> Teste com funções

/* Eemplo 2 -  Desagregação de parâmetros, uso em pf, principalmente nesse paradigma, esse conceito pe nomedo currywg, ela permite a aplicação pacial
 
               Função como expressão: potencia = (num, n)  => num**n, só permite a aplicação total da função, e usando o currywg se aplica parcialmente
*/
// A declaração tem definição parâmetro a parêmtro na função
potencia = (num) => (n)  => num**n // Função que recebe um parâmetro, e retorna uma função que recebe outro parâmetro e retorna um resultado
                                   // Em pf, funções são cidadãs de primeira classe, ou seja, uma função também é um valor.

// A aplicação é feita argumento e argumento
console.log(potencia(2)(2))
console.log(potencia(4)(1/2))
console.log(potencia(2)(-1))
// Tratamento de aplicação, o quanto as funções podem ser reutilizadas e aplicadas, currywg = reúzo.

// Exemplo 3 - Teste com aplicação parcial

// Como o retorno é uma função, posso ter o expoente e sempre uma função com o valor de n sendo aguardado, porém o mais útil é passar o argumento n e 
// o num ficar esperando a definição

expoente = (e) => (base) => base**e // Ivertendo a ordem dos parâmetros, é possível fazer a resolução do expoente e aplicar na base desejada depois, já que o js interpreta da 
                                    // da esquerda para a direita. Assim é possível derivar em diversas funções, aplicando diferentes expoentes a bases diferentes

quadrado = expoente(2) // Com isso, define-se a função quadrado, reutilizando a função do expoente
raizq = expoente(1/2)  // Com isso, define-se a função raiz quadrada, reutilizando a função do expoente
inversa = expoente(-1) // Com isso, define-se a função inverso, reutilizando a função do expoente

console.log(quadrado(2))
console.log(raizq(2))
console.log(inversa(2))
// Sempre que for possível ver uniformudade das funções, é melhor definir as funções com parâmetros desagregados e as derivações como aplicações parciais