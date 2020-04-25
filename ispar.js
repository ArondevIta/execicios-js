/*
Dado um vetor de números, como poderia ser realizada a soma de 
todos os valores pares utilizando reduce e filter.
*/

const vetor = [1, 2, 3, 4, 5]
const ehpar = numero => numero % 2 === 0
const somadora = (total, atual) => total + atual
const soma = vetor.filter(ehpar).reduce(somadora, 0)
console.log('Soma dos pares: ', soma)
