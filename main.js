console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Cria e adiciona elementos no body
const horaEl = document.createElement('div');
const msgEl = document.createElement('div');

horaEl.style.fontSize = '3em';
horaEl.style.textAlign = 'center';
horaEl.style.marginTop = '20vh';

msgEl.style.fontSize = '1.5em';
msgEl.style.textAlign = 'center';
msgEl.style.marginTop = '10px';

document.body.appendChild(horaEl);
document.body.appendChild(msgEl);

function atualizar() {
  const agora = new Date();
  const h = agora.getHours().toString().padStart(2, '0');
  const m = agora.getMinutes().toString().padStart(2, '0');
  const s = agora.getSeconds().toString().padStart(2, '0');
  horaEl.textContent = `${h}:${m}:${s}`;

  if (agora.getHours() < 12) {
    msgEl.textContent = "Bom dia! ☀️";
    document.body.style.background = "#ffeaa7";
    document.body.style.color = "black";
  } else if (agora.getHours() < 18) {
    msgEl.textContent = "Boa tarde! 😎";
    document.body.style.background = "#cfb024ff";
    document.body.style.color = "black";
  } else {
    msgEl.textContent = "Boa noite! 🌙";
    document.body.style.background = "#2d3436";
    document.body.style.color = "white";
  }
}

setInterval(atualizar, 1000);
atualizar();
