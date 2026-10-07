//comentario de uma linha
/*
comentario de multiplas linhas 
*/

// tres formas de declarar uma variavel (sem tipo)
//o var e o let se distinguem pelo escopo e declaração.
//Let é "local" aparece somente naquele escopo (Onde está para baixo) ele não consegue "subir"
//Enquanto o var é global
let nome="Romulo";
var sobreNome;

if ( nome =="Romulo") {
    sobreNome="Beninca"
    let idade=20;
    var pet="Dog";
    console.log("nome: "+nome+"Sobrenome: "+sobreNome+"Idade:"+idade+"Pet:"+pet);
    
}
let idade=20;
//estrutura de seleção do JS
if (idade=="20") {
    console.log("Nome: "+nome)
}else{
    console.log("Nome: "+"Gustavo");
    
}

peso=80
altura=1.77
imc=peso/(altura*altura)
//classificação do imc
if (imc<18.5) {
    console.log("abaixo do peso");
    
}else if (imc<25) {
    console.log("Ideal");
} 
else if (imc<30) {
    console.log("levemente acima do peso");
} 
else if (imc<35) {
    console.log("obesidade 1");
} 

else if (imc<40) {
    console.log("obesidade 2");
} 
else if (imc>40) {
    console.log("obesidade 3");
} 


//switch case   estrutura de seleção

/*
switch (a) {
    case 1: console.log("A");break;
    case 1: console.log("B");break;
    case 1: console.log("C");break;
    case 1: console.log("D");break;
    case 1: console.log("E");break;
    default:console.log("D");
}
*/
// estrutura repetitiva while
let i=0;
while (i<5) {
    console.log(i);
    i++;
}

// for
for (let i= 0; i < 5; i++) {
    console.log(i);
}

// array
let Carnes = ["Picanha ","Costela ","Alcatra "]

Carnes.forEach( (v1,index) => {
    console.log(v1  +"index: "+ index);
    
})