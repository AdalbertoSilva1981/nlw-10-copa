function creategame(player1, hour, player2) {
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}" />
           <strong>${hour}</strong>
         <img src="./assets/icon-${player2}.svg" alt="${player2}" />
    </li>
`
}

let delay = -0.4
function createcard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="cards" style="animation-delay: ${delay}s">
    <h2>${date} <span> ${day} </span> </h2>
    <ul>
      ${games}
    </ul>
    </div>
`
}
document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo NLW">
</header>
<main id="cards">

${createcard(
  "20/11",
  "abertura </br></br>domingo",
  creategame("catar", "13:00", "ecuador")
)}

${createcard(
  "21/11",
  "segunda",
  creategame("england", "10:00", "ira") +
    creategame("senegal", "13:00", "netherland") +
    creategame("eua", "16:00", "gales")
)}

${createcard(
  "22/11",
  "terça",
  creategame("argentina", "07:00", "arabia") +
    creategame("denmarq", "10:00", "tunisia") +
    creategame("mexico", "13:00", "polond") +
    creategame("france", "16:00", "australia")
)}

${createcard(
  "23/11",
  "quarta",
  creategame("marrocos", "07:00", "croatia") +
    creategame("germany", "10:00", "japan") +
    creategame("spain", "13:00", "costarica") +
    creategame("belgiun", "16:00", "canada")
)}

${createcard(
  "24/11",
  "quinta",
  creategame("switzer", "07:00", "cameroon") +
    creategame("uruguay", "10:00", "southkorea") +
    creategame("portugal", "13:00", "ghana") +
    creategame("brazil", "16:00", "serbia")
)}

${createcard(
  "25/11",
  "sexta",
  creategame("gales", "07:00", "ira") +
    creategame("catar", "10:00", "senegal") +
    creategame("netherland", "13:00", "ecuador") +
    creategame("england", "16:00", "eua")
)}

${createcard(
  "26/11",
  "sábado",
  creategame("tunisia", "07:00", "australia") +
    creategame("polond", "10:00", "arabia") +
    creategame("france", "13:00", "denmarq") +
    creategame("argentina", "16:00", "mexico")
)}

${createcard(
  "27/11",
  "domingo",
  creategame("tunisia", "07:00", "australia") +
    creategame("polond", "10:00", "arabia") +
    creategame("france", "13:00", "denmarq") +
    creategame("argentina", "16:00", "mexico")
)}

${createcard(
  "28/11",
  "segunda",
  creategame("cameroon", "07:00", "serbia") +
    creategame("southkorea", "10:00", "ghana") +
    creategame("brazil", "13:00", "switzer") +
    creategame("portugal", "16:00", "uruguay")
)}

${createcard(
  "29/11",
  "terça",
  creategame("ecuador", "12:00", "senegal") +
    creategame("netherland", "12:00", "catar") +
    creategame("ira", "16:00", "eua") +
    creategame("gales", "16:00", "england")
)}

${createcard(
  "30/11",
  "quarta",
  creategame("tunisia", "12:00", "france") +
    creategame("australia", "12:00", "denmarq") +
    creategame("polond", "16:00", "argentina") +
    creategame("arabia", "16:00", "mexico")
)}

${createcard(
  "01/12",
  "quinta",
  creategame("croatia", "12:00", "belgiun") +
    creategame("canada", "12:00", "marrocos") +
    creategame("japan", "16:00", "spain") +
    creategame("costarica", "16:00", "germany")
)}

${createcard(
  "02/12",
  "sexta",
  creategame("southkorea", "12:00", "portugal") +
    creategame("ghana", "12:00", "uruguay") +
    creategame("serbia", "16:00", "switzer") +
    creategame("cameroon", "16:00", "brazil")
)}
</main>
`
