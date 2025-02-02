//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

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
  } else {
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    resultado.innerHTML = "O amigo sorteado foi: " + amigoSorteado;
  }
}

