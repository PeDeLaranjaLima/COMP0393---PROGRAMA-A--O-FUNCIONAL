const ndias = (mes) => {
  
  if (mes[0] + mes[1] + mes[2] == "jan" || mes[0] + mes[1] + mes[2] == "mar" || mes[0] + mes[1] + mes[2] == "abr"){
    return "31"
  } else if (mes[0] + mes[1] + mes[2] == "fev"){
    return "28"
  } else {
    return "30"
  }
  
}

console.log(ndias("janeiro"))
console.log(ndias("feverieiro"))
console.log(ndias("novembro"))