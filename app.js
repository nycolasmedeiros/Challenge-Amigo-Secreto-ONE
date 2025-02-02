//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  let novoAmigo = document.getElementById("amigo").value;

  if(novoAmigo === ""){
    alert("Por favor, digite um nome.");
  } else {
    amigos.push(novoAmigo);
    document.getElementById("amigo").value = "";
  }
  atualizarListaDeNomes();
}

function atualizarListaDeNomes() {
  let listaDeNomes = document.getElementById("listaAmigos");
  listaDeNomes.innerHTML = "";
  
  for(let i = 0; i < amigos.length; i++){
    let novoLi = document.createElement("li");
    novoLi.innerHTML = amigos[i];
    listaDeNomes.append(novoLi);
  }
}

function sortearAmigo(){
  let resultado = document.getElementById("resultado");

  if(amigos.length === 0){
    alert("Por favor, digite um nome");
  } else if(sorteados.length === amigos.length){
    resultado.innerHTML = "Todos os nomes já foram sorteados!"
  } else {
    let indiceAleatorio;
    do {
      indiceAleatorio = Math.floor(Math.random() *amigos.length);
    } while (sorteados.includes(amigos[indiceAleatorio]));
      const amigoSorteado = amigos[indiceAleatorio];
      sorteados.push(amigoSorteado);
      resultado.innerHTML = "O amigo sorteado foi: " + amigoSorteado;
  }
}

document.getElementById("amigo").addEventListener("keydown", function(event){
  if (event.key === "Enter"){
    adicionarAmigo();
  }
});

