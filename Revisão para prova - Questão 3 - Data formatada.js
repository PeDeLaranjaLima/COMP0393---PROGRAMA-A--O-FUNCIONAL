const hoje = () => {
  
  const data = (new Date()).toString()
  console.log(data)
  
  ano = data[11] + data[12] + data[13] + data[14]
  mes = data[4] + data[5] + data[6]
  dia = data[8] + data[9]
  
  return `${dia}/${mes}/${ano}`
}

console.log(hoje())