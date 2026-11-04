
var valoresSorteados = []

function sortear(){

    let min = Number(document.getElementById("Min").value);
    let max = Number(document.getElementById("Max").value);

    if (min >= max) {
        alert("O mínimo não pode ser maior que o máximo!");
        return;
    }   
    

    let numero = Math.floor(Math.random() * (max - min + 1)) + min;

    valoresSorteados.push(numero)
    document.getElementById("Resultado").innerHTML = numero;
    
    span=document.createElement("span");
    span.textContent=numero;
    Sorteados.appendChild(span)
}
