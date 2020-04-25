/*
ado um vetor de valores, 
retorne um objeto com quantas vezes cada valor está presente no vetor
*/
const vetor = [1, 2, 3, 4, 5, 5, 4, 3, 2, 4, 6, 4, 2, 1]
const howManyTimes = (agg, val) => {
  if(!agg[val]){
    agg[val] = 0
  }
  agg[val] = agg[val] + 1
  return agg
}

const times = vetor.reduce(howManyTimes, {})
console.log(times)
