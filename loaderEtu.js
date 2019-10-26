var liste = [
  {
    Etudiants: "Alexandre Ferret"
  },
  {
    Etudiants: "Anna Giraud"
  },
  {
    Etudiants: "Alexandre Merault"
  },
  {
    Etudiants: "Mary Dermy"
  },
  {
    Etudiants: "F.Xavier Fin"
  },
  {
    Etudiants: "Louis Pichon"
  },
  {
    Etudiants: "Sara Profit"
  },
  {
    Etudiants: "Beljilali Benhamed"
  },
  {
    Etudiants: "Manassé Napoléon"
  },
  {
    Etudiants: "Clemence Tassily"
  },
  {
    Etudiants: "Denis Fluteaux"
  },
  {
    Etudiants: "Benjamin Fosse"
  },
  {
    Etudiants: "Floran Daché"
  },
  {
    Etudiants: "Sebastien Vachiery"
  },
  {
    Etudiants: "Ludovic DUCROQ"
  },
  {
    Etudiants: "Hugo Bouteiller"
  },
  {
    Etudiants: "Antoine Becquemont"
  },
  {
    Etudiants: "Nina Huet"
  },
  {
    Etudiants: "Aymé Ahmed"
  },
  {
    Etudiants: "Nicolas Lecerf "
  },
  {
    Etudiants: "Antoine Pelcat"
  },
  {
    Etudiants: "Maxime Ladonne"
  },
  {
    Etudiants: "Charles FIN"
  },
  {
    Etudiants: " Raphael Masse"
  },
  {
    Etudiants: " Myleine Kazadila"
  },
  {
    Etudiants: "Allan Pasdeloup"
  },
  {
    Etudiants: "Quentin Meunier"
  },
  {
    Etudiants: "Natan Bouraly"
  }
];

for (var i = 0; i < liste.length; i++) {
  console.log(i);
  let lesEtudiants = document.querySelector("#Container");
  let bouton = document.querySelector("#AXA");

  let containerCard = document.createElement("div");
  containerCard.classList.add("containerCard");

  let maxwidth = document.createElement("div");
  maxwidth.classList.add("maxwidth");

  let innerwidth = document.createElement("div");
  innerwidth.classList.add("innerwidth");

  let profileCard = document.createElement("div");
  profileCard.classList.add("profileCardEtu");

  let iconcv = document.createElement("div");
  iconcv.classList.add("icon");
  iconcv.innerHTML = '<i class="fas fa-download"></i>';
  let textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");

  let Entreprise = document.createElement("h1");
  Entreprise.innerHTML = "Année 2 : " + liste[i]["Etudiants"];

  maxwidth.appendChild(innerwidth);
  innerwidth.appendChild(containerCard);
  containerCard.appendChild(profileCard);
  profileCard.appendChild(textContainer);
  profileCard.appendChild(iconcv);
  textContainer.appendChild(Entreprise);
  lesEtudiants.insertBefore(containerCard, bouton);
}

function hophophop() {
  alert("tu n'es pas encore assez haut niveau pour continuer (où peut être le developper)");
}
