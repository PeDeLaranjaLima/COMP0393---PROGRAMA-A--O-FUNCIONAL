/* Último assunto antes da prova:

- Função como retorno; e
- Finalizando com função como argumento

Curiosidade: PF se baseia em lâmbida funcion, no formalismo matemático - na base - é lâmbida funcion, é o fundamento do haskell, o lâmbida calculus

*/

// Ex: Área do círculo para ilustrar um conceito de Biding (amarração) -> Evitar erros de semầntica -> Ainda é estático
const areaCirculo = (raio, pi = 3.14) => pi*raio**2 // Se não passar argumento, o valor padrão será o de 3.14, mas se definir vai ser o valor definido

// Teste 1
const pi = 3.1415
console.log(areaCirculo(10, pi)) // Esse valor de pi é o de cima, não o da função

/**********Daqui para baixo não funciona, por conta que está tentando alterar uma constante, então não funciona - nem para alterar pi ou areaCirculo*********/

// Teste 2
pi = pi + 1
console.log(areaCirculo(10, pi))

// Teste 3
const areaCirculo2= (raio, pi = 3.14) => pi*raio**3 // Mesmo que aqui fosse "pi*raio**2", causaria erro, pois é uma nova atribuição a um "apelido" (Alias) já usado.
console.log(areaCirculo2(10, pi))

/* Em termos de resultados, não tem erros, porém há incoerências que a PF, busca solucionar. Se levar em conta, pi nunca deveria deixar de ser pi, mesmo que o funcionamento esteja correto.
Pf sempre tratou isso, ou tentou minimizar essas incoerências, dessa forma, PF escolheu não lidar com variáveis, assim não incorre em certos erros ou inconsistências semânticas.
Faz uma amarração, uma atribuição que não pode desfazer. Assim, deve-se usar o const, para não tratar do endereço de memória, mas sim com o valor, garantindo a imutabilidade, que é a forma que todas as estruturas de dados são tratadas em PF.*/

/*
Conceito: Se uma função é definida como aplicação parcial, e isso gera uma nova resposta, da mesma forma, é possível passar uma definição de função como arguimento, já que é 
          um valor, então pode ser definida assim -  const. Para não gastar recursos com definição de função, se usa uma função como parâmetro funções, de forma que o primeiro
          parâmetro seja o valor, e o segundo o comportamento, 
                                                                          Ex: cons fazer = (x) => (f) => f(x).
           O comportamento só é visto na aplicação da função fazer: console.log(fazer(5)(f)), dizendo basicamente "fazer, pegue esse valor 5, e aplique o comportamento f a ele".
           Isso é diferente de console.log(f(5)), o que pode render comportamentos diferntes.
           Como definição de valor e função são "a mesma coisa" em relação a PF, então é possível aplicar diretamente, sabendo o comportamento desejado, não precias defnir a função.    
                                                                          Ex: console.log(fazer(5)((x)=>x-1)) // Funções sem nome são chamadas de Anônimas
                                                                              console.log(fazer(5)((x)=>x+1))
           Acima pé usando o conceito dse função como argumento. E funções de alta ordem, por sua vez são funções que se permitem ter argumento outras funções. Python e JavaScript permitem esse                a aplicação desse conceito, C não permite isso.
*/
// QUESTÃO DE PROVA ANTERIOR: Substitua o tracejado por uma função que sbstitua o valor por um número em módulo. Sendo o resultado correto um 6
const somaF = (f, x, y, z) => f(x) + f(y) + f(z)

concole.log(somaF((x) => Math.abs(x),-3, 1, 2))

