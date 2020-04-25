/*
Uma função é chamada da seguinte forma:
calculadora(10, '+', 20)
crie o corpo da função de forma que ela realize as 4 operações aritméticas
*/

let num1, num2, op
num1 = prompt('digite o primeiro valor ')
num2 = prompt('digite o segundo valor')
op = prompt('digite qual operação deseja, /, *, +, -')

calculadora = (num1, op, num2) => {
  if(op==='*'){
    return num1*num2
  }else if(op==='/'){
    if(num1 == 0 || num2 == 0){
      return 'Não é possivel dividir por 0'
    }else{
      return num1/num2
    }
  }else if(op === '-'){
    return num1-num2
  }else if(op === '+'){
    return num1+num2
  }else{
    return 'Operação invalida'
  }
}

console.log(calculadora(num1, op, num2))
