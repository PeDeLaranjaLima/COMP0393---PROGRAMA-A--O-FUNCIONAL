/*
Para se saber se qualquer ano é bissexto, é muito simples: se o número formado pelos dois últimos algarismos do referido ano for múltiplo de 4, este ano é bissexto.

Exemplos: a) 1928. Os dois últimos algarismos formam o número 28, que é múltiplo de 4, logo o ano de 1928 foi bissexto; b) 1998.
*/

const bissexto = (ano) => {
  if ((ano % 400) == 0 && (ano % 100) == 0) {
     return true
  } else {
    return false
  }
}

console.log(bissexto(2016))
console.log(bissexto(2000))
console.log(bissexto(1700))
console.log(bissexto(1800))
console.log(bissexto(100))