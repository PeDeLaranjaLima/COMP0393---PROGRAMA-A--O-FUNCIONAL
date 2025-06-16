const areaTriangulo = (l1, l2, l3) => { // Erro no resultado!!!
  if (l1 == l2 == l3){
    h = (l1 * 3**(1/2)) / 2
    return (l2 * h) / 2
  } else {
     h = (l1 * 3**(1/2)) / 2
     //l22 = l2/2
     return  (l2 * h) / 2
  }
} 

console.log(areaTriangulo(3, 4, 5))