let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio_cem = numeroAleatorio * 100

let numeroAleatorioInteiro = Math.floor(numeroAleatorio_cem);

console.log(numeroAleatorioInteiro);

let num_menor = "número menor";
let num_igual = "número igual";
let num_maior = "número maior";

let valores_n1 = [];
let valores_n2 = [];

function comparacao(){
    let n1 = parseInt(document.getElementById("número_1").value);
    let n2 = numeroAleatorioInteiro;

    if(n1 < n2){
        if (!valores_n1.includes(n1)){
            valores_n1.push(n1);
        }
        document.getElementById("paragrafo_resposta_escrita").style.setProperty("background-color", "red");
        document.getElementById("paragrafo_resposta_pequena").innerHTML = valores_n1;
        document.getElementById("paragrafo_resposta_escrita").innerHTML = num_menor;

    }if( n1 === n2){
        document.getElementById("paragrafo_resposta_escrita").style.setProperty("background-color", "green");
        document.getElementById("paragrafo_resposta_escrita").innerHTML = num_igual;
    }if ( n1 > n2){
        if (!valores_n2.includes(n1)) {
            valores_n2.push(n1);
        }
        document.getElementById("paragrafo_resposta_escrita").style.setProperty("background-color", "red");
        document.getElementById("paragrafo_resposta_grande").innerHTML = valores_n2
        document.getElementById("paragrafo_resposta_escrita").innerHTML = num_maior;
    }    
    
}

