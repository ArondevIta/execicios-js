/*
Dado um vetor de valores, retorne um vetor com somente os valores únicos do 
vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) 
(Dica 1: utilize reduce, filter e keys).
*/
const vetor = [1, 1, 2, 2, 3]
const howOneTime = (agg, val) => {
  if(!agg[val]){
    agg[val] = {
      value: val,
      occur: 0
    }
  }
  agg[val].occur = agg[val].occur + 1
  return agg
}

const count = vetor.reduce(howOneTime, {})
const keys = Object.keys(vetor.reduce(howOneTime, {}))
const unique = keys.filter( key => count[key].occur === 1)
const uniqueValues = unique.map(val => count[val].value)
console.log(uniqueValues)
