const testaOp = (x, y, z) => {
  if (z == x + y) 
    return `${x} ${soma} ${y} = ${z}`
  else if (z == x * y) 
    return `${x} ${mult} ${y} = ${z}`
   else if (z == x - y)
    return `${x} ${sub} ${y} = ${z}`
  else if (z == x / y) 
    return `${x} ${div} ${y} = ${z}` 
  else 
    return "falha"
} 

const soma = "+"

const mult = "*"

const sub = "-"

const div = "/"
      
console.log(testaOp(10, 25, 35))
console.log(testaOp(10, 25, 250))
console.log(testaOp(30, 25, 5))
console.log(testaOp(100, 25, 4.0))
console.log(testaOp(100, 25, 25))