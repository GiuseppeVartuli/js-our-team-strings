/*
Utilizzando i dati forniti, creare un array di stringhe con i nomi dei membri del team.
MILESTONE 0:
Creare l’array di stringhe contenente i nomi dei membri del team.
MILESTONE 1:
Stampare le informazioni su DOM come card.
MILESTONE 3:
Aggiungere un evento click sulla card che aggiunge/rimuove una classe per evidenziare un componente del team.
BONUS 1:
In generale curare la parte di UI e organizzare i singoli membri in card/schede.
BONUS 2:
Inserire un form per l’aggiunta di un elemento alla lista.
*/

// Creare un array contenenti nomi dei membri del team.
const chelsea_team = [
  "James",
  "Thiago Silva",
  "Enzo Fernadez",
  "Palmer",
  "Mudryk",
  "Nkunku",
];
/*
const ruolo = [
  "difensore",
  "difensore",
  "centrocampista",
  "centrocampista",
  "attaccante",
  "attaccante",
];*/
// Stampare informazioni su DOM come card.

const chelsea_teamEl = document.getElementById("team");

for (let i = 0; i < chelsea_team.length; i++) {
  const member = chelsea_team[i];
  const memberEl = document.createElement("div");
  memberEl.classList.add("col-2", "text-primary", "card");
  memberEl.append(member);
  chelsea_teamEl.appendChild(memberEl);
  //aggiunge/rimuove una classe per evidenziare un componente del team.
  memberEl.addEventListener("click", function () {
    this.classList.toggle("bg-primary");
    this.classList.toggle("text-white");
  });
}

/*
// Bonus1 : organizzare i singoli membri in card/schede.

const chelsea_teamEl = document.getElementById("team");

for (let i = 0; i < chelsea_team.length; i++) {
  const member = chelsea_team[i];
  const colEl = document.createElement("div");
  colEl.classList.add("col-2");
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  const bodyEl = document.createElement("div");
  bodyEl.classList.add("card-body");
  const memberEl = document.createElement("h5");
  memberEl.classList.add("card-title");
  memberEl.append(member);
  chelsea_teamEl.appendChild(memberEl);
}

  //aggiunge/rimuove una classe per evidenziare un componente del team.
  memberEl.addEventListener("click", function () {
    this.classList.toggle("bg-primary");
    this.classList.toggle("text-white");
  });
}

const ruoloEl = document.getElementById("ruolo");
for (let i = 0; i < ruolo.length; index++) {
  const position = ruolo[i];
  const positionEl = document.createElement("p");
  positionEl.classList.add("card-text");
  positionEl.append(position);
  ruoloEl.appendChild(positionEl);
}
*/
