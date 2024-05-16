function paginaUno(){
    alert("sei nella prima pagina")
}

function attenzione(){
alert("ATTENZIONE");
}

//Generazione di numeri

function GeneraNumeroCasuale(){
  return Math.floor(Math.random() *100) +1;
}

var numero = GeneraNumeroCasuale();


document.getElementById("numero").textContent = numero;


var lista = [""];
lista.push("numero");

function redirectToPage1(){
  window.location.href = "test_index1.html";
}
function redirectToPage2(){
  window.location.href = "test_index2.html";
}

