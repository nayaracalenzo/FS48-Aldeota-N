//Crie um programa que receba a quantidade total de alunos e a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes

// const qtdAlunos = parseInt(prompt("Digite a quantidade total de alunos"))
// const alunosPresentes = parseInt(prompt("Digite o total de alunos presentes")) 

// const alunosFaltantes = (param1, param2) => {
//     const faltantes = param1 - param2
//     return faltantes
// }

// alert(`O total de alunos é ${qtdAlunos}, destes estão presentes ${alunosPresentes}, faltam então ${alunosFaltantes(qtdAlunos, alunosPresentes)} alunos`)

const tempo = Number(prompt("Quantas horas passou no estacionamento?"))

const calcularEstacionamento = horas =>  5 + (horas - 1) * 2

alert(`O valor a pagar é de R$ ${calcularEstacionamento(tempo).toFixed(2)} `)




