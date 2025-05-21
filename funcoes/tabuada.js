const numeroInput = document.getElementById('numeroInput')
const resultado = document.getElementById('resultado')
const form = document.querySelector('form')

form.addEventListener("submit", (event)=> {
    event.preventDefault()    
})

function tabuada() {
    
    const valor = Number(numeroInput.value)
    let saida = `<h2>Tabuada do número ${valor}</h2>`

    for(let i = 1; i <= 10; i++) {
        saida += `<p>${valor} x ${i} = ${valor * i}</p>`
    }
    resultado.innerHTML = saida
}