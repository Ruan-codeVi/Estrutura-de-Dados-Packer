let numeros = new Array(5)
numeros[0] = 12
numeros[1] = -5
numeros[2] = 2
numeros[3] = -6
numeros[4] = 7
let positivo = numeros.filter(value => value > 0)
console.log(`${positivo.length} valor(es) positivo(s)`)
