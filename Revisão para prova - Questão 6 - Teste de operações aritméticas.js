const testaOp = (op, x, y, z) => {
  if (z == x + y && op == soma) 
    return `${x} ${op} ${y} = ${z}`
  else if (z == x * y && op == mult) 
    return `${x} ${op} ${y} = ${z}`
   else if (z == x - y && op == sub)
    return `${x} ${op} ${y} = ${z}`
  else if (z == x / y && op == div) 
    return `${x} ${op} ${y} = ${z}` 
  else 
    return "falha"
} 

const soma = "+"

const mult = "*"

const sub = "-"

const div = "/"
      
console.log(testaOp(soma, 10, 25, 35))
console.log(testaOp(mult, 10, 25, 250))
console.log(testaOp(sub, 30, 25, 5))
console.log(testaOp(div, 100, 25, 4.0))
console.log(testaOp(div, 100, 25, 25))