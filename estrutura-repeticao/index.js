// confirm('Você aceita receber notificações')

// const nome = prompt('Digite seu nome')

// console.log(nome)

// if (condition) {
//     //bloco de construção
// } else {
//     //outro bloco caso o primeiro seja falso
// }

// //Verificação de habilitação
// const idade = 18
// const habilitacao = prompt('Possui habilitação? sim ou não').toLowerCase()


// if (idade >= 18 && habilitacao === 'sim'){
//     alert('Pode dirigir!')
// } else {
//     alert('Não pode dirigir')
// }


// if (condicao) {

// } else if (outraCondicao) {

// } else {

// }


// const frutas = ['Banana', 'Mamão', 'Uva']

// // frutas.forEach((item) => {
// //     console.log(item)
// // })

// // for (let i = 0; i < 3; i++) {
// //     const itens = frutas[i]
// //     console.log(itens)
// // }

// //enquanto - while
// let i = 0
// while (i < 3) {
//     const itens = frutas[i]
//     console.log(itens)
//     i++
// }

// let pensamento = 7
// let valor = 0

// do {
//     valor = parseInt(prompt("Advinhe o número que estou pensando de 1 a 10"))
//     console.log(valor)
// } while (valor !== pensamento);


//Questão 1
//.Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja.Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho.Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.
// let cor = prompt('Digite a cor da etiqueta: \n Verde, \n Amarelo, \n Azul, \n Vermelho').toLowerCase()

// while (cor !== 'vermelho' && cor !== 'verde' && cor !== 'amarelo' && cor !== 'azul') {
//     cor = prompt('Você digitou uma etiqueta inválida. Digite Verde, Vermelho, Amarelo ou Azul').toLowerCase()
// }

// //Leia o preço de um produto e a cor da sua etiqueta.
// const preco = parseFloat(prompt('Digite o preço de um produto'))


//De acordo com a cor da etiqueta aplique um desconto sobre o produto.Verde - 10 % | Amarelo - 20 % | Azul - 30 % | Vermelho 40 %
// let desconto = 0
// let valorFinal

// if (cor === 'verde') {
//     desconto = 0.1
// } else if (cor === 'amarelo') {
//     desconto = 0.2
// } else if (cor === 'azul') {
//     desconto = 0.3
// } else if (cor === 'vermelho') {
//     desconto = 0.4
// }

// valorFinal = preco - (preco * desconto)

// alert(`O valor do produto é R$ ${preco}, com desconto de ${desconto} ficou R$ ${valorFinal}`)


//Você precisa criar um programa que ajude a calcular a média de notas de uma turma. O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno. Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

//qtd alunos turma
const qtdAlunos = Number(prompt('Digite a quantidade de alunos'))
let soma = 0

for (let i = 1;i <= qtdAlunos;i++) {
    const nota = Number(prompt(`Digite a nota do ${i}º aluno`))
    soma += nota
}

let mediaTurma = (soma / qtdAlunos).toFixed(1)

alert(`a média da turma é ${mediaTurma}`)