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
// Stampare informazioni su DOM come card.

const chelsea_teamEl = document.getElementById("team");

for (let i = 0; i < chelsea_team.length; i++) {
  const member = chelsea_team[i];
  const memberEl = document.createElement("div");
  memberEl.classList.add("col-2", "text-primary");
  memberEl.append(member);
  chelsea_teamEl.appendChild(memberEl);
  //aggiunge/rimuove una classe per evidenziare un componente del team.
  memberEl.addEventListener("click", function () {
    this.classList.toggle("bg-primary");
    this.classList.toggle("text-white");
  });
}
