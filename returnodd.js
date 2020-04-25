/*
Dado um vetor com números, retorne somente os números ímpares
*/
const vetor = [1, 2, 3, 4, 5, 6, 7, 8]
const isodd = val => val % 2 !== 0
const odd = vetor.filter(isodd)
console.log(`Numeros impares: ${odd}`)
