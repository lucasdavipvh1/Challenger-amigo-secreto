//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let participantes = [];
let nomesRestantes = [];

const inputNome = document.getElementById("amigo");
const listaParticipantes = document.getElementById("listaAmigos");
const divResultado = document.getElementById("resultado");

function adicionarAmigo() {
  const nome = inputNome.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome antes de adicionar!");
    return;
  }

  if (participantes.includes(nome)) {
    alert("Este nome já foi adicionado.");
    return;
  }

  participantes.push(nome);
  atualizarLista();
  inputNome.value = "";
  nomesRestantes = [...participantes];
}

function atualizarLista() {
  listaParticipantes.innerHTML = "";

  participantes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaParticipantes.appendChild(li);
  });
}

function sortearAmigo() {
  if (participantes.length === 0) {
    alert("Não há nomes na lista! Por favor, adicione nomes antes de sortear.");
    return;
  }

  const index = Math.floor(Math.random() * participantes.length);
  const nomeSorteado = participantes.splice(index, 1)[0];

  const p = document.createElement("p");
  p.textContent = `O nome sorteado é: ${nomeSorteado}`;
  divResultado.appendChild(p);

  limparLista();
}

