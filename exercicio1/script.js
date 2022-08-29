
// a) Declarando a variável nome sem atribuir valor. 
/*const nome =


b) Declarando a variável idade sem atribuir valor. 

let idade =

c) Imprimindo na tela o tipo das variáveis.
console.log(typeof(nome))
console.log(typeof(idade))

d)Ocorreu um erro, pois não houve a inicialização da constante,
na variável let o tipo foi indefinido.
*/

/* e) Atualizando o código perguntar ao usuário seu nome e sua idade,
atribuindo esses dois valores às variáveis que acabou de criar.*/

const nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

/* f)Novamente, imprima na tela o tipo dessas variáveis. 
O que você notou? Escreva em um comentário de código.*/

console.log(typeof(nome), nome)
console.log(typeof(idade), idade)

//O tipo da variável de nome e idade foram string.

// g)Imprimindo a mensgaem desejada
console.log("Olá", nome, "você tem", idade)
