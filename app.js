//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let nomes = [];

// Adiciona nome à lista
function adicionarNome() {
  const input = document.getElementById("nomeInput");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  if (nomes.includes(nome)) {
    alert("Este nome já foi adicionado!");
    return;
  }

  nomes.push(nome);
  input.value = "";
  input.focus();
  atualizarLista();
}

// Atualiza a lista visível
function atualizarLista() {
  const lista = document.getElementById("listaNomes");
  lista.innerHTML = "";
  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// Sorteia um amigo aleatoriamente
function sortearAmigo() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos dois nomes para sortear!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indiceAleatorio];

  document.getElementById("resultado").textContent =
    `O amigo secreto sorteado é: ${nomeSorteado} 🎉`;
}
