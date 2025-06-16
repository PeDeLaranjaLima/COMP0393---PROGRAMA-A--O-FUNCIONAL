const c2f = (celsius) => {
 const valorf = (celsius * (9/5)) + 32
 return `${celsius}\xB0C = ${Math.trunc(valorf)}\xB0F` 
}

const f2c = (fahrenheit) => {
  const valorc = (fahrenheit - 32) * 5/9
  return `${fahrenheit}\xB0C = ${Math.trunc(valorc)}\xB0F`
}

console.log(c2f(60))
console.log(f2c(45))