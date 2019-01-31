//Objeto

const rafael = {
    adjetivo: 'Feio',
    idade: 27
}

console.log(rafael)

let nome
let idade

//Funcao
const funcaoNome = function (a, b) {
    console.log("O nome dele é " + a + " e sua idade é " + b)
}

funcaoNome('Kennedy', 30)

//Array

const nome2 = ['Kennedy', 'Lucas', 'Rafael']

console.log("Array: O nome dele é " + nome2[1])

//for

for ( let i = 0; i<=10; i++){
    console.log("For: Número " + i)
}

//booleano

const verdade = 1
const falso = 0

console.log("Booleano = Verdade ou falso: " + !!verdade, !!falso)

//FunçãoArrow

const funcaoArrow = (a, b) => {
    soma = a + b
    console.log(soma)
}
funcaoArrow(2, 3)