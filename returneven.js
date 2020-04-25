/*
 Dado um vetor com números, retorne somente os números pares;
*/

const vetor = [1, 2, 3, 4, 5, 6, 7, 8]

const iseven = val => val % 2 === 0
const even = vetor.filter(iseven)
console.log(`numeros pares ${even}`)
