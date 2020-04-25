/*
Dado um vetor de números, como poderia ser realizada a 
soma de todos os valores ímpares utilizando reduce e filter.
*/
const vetor = [1, 2, 3, 4, 5]
const ehimpar = numero => numero % 2 !== 0
const somadora = (total, atual) => total + atual
const soma = vetor.filter(ehimpar).reduce(somadora, 0)
console.log('Soma dos impares', soma)
