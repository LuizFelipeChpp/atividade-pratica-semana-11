const equipes = [

  {
    id: 1,
    nome: "McLaren",
    imagem: "imgs/mclaren.png",
    descricao: "Equipe britânica multicampeã da Fórmula 1.",
    motor: "Mercedes-AMG F1 M17",
    pais: "Reino Unido",
    fundacao: "1963 mas estreiou na formula 1 em 1966",
    titulo: "9 títulos mundiais",
    pilotos: [
      {
        nome: "Lando Norris",
        imagem: "imgsPilotos/LandoNorris.jpg",

      },

      {
        nome: "Oscar Piastri",
        imagem: "imgsPilotos/Piastri.jpg",
      },

    ]

  },

  {
    id: 2,
    nome: "Red Bull Racing",
    imagem: "imgs/redbull.png",
    descricao: "Equipe austríaca multicampeã da Fórmula 1, famosa por sua hegemonia com  Max Verstappen.",
    motor: "Honda RBPT",
    pais: "Áustria",
    fundacao: "2005",
    titulo: "6 títulos mundiais",
    pilotos: [
      {
        nome: "Max Verstappen",
        imagem: "imgsPilotos/Verstappen.jpg",
      },

      {
        nome: "Isack Hadjar",
        imagem:"imgsPilotos/Hadjar.jpg"
      }
    ]

  },

  {
    id: 3,
    nome: "Ferrari",
    imagem: "imgs/ferrari.png",
    descricao: "Lendária escuderia italiana e a maior campeã da história da Fórmula 1",
    motor: "067/6",
    pais: "Italia",
    fundacao: "1929",
    titulo: "16 títulos mundiais",
    pilotos: [
      {
        nome: "Lewis Hamilton",
        imagem: "imgsPilotos/Hamilton.jpg"
      },

      {
        nome: "Charles Leclerc",
        imagem: "imgsPilotos/Leclerc.jpg"
      }
    ]
  },

  {
    id: 4,
    nome: "Mercedes",
    imagem: "imgs/mercedes.png",
    descricao:"Dominante equipe alemã e octacampeã consecutiva da Fórmula 1",
    motor: "Mercedes-AMG F1 M17",
    pais: "Alemanhã",
    fundacao:"fundada em 2010(na formula1)",
    titulo: "8 títulos consecutivos",
    pilotos: [
      {
        nome: "George Russel",
        imagem: "imgsPilotos/Russel.jpg"
      },

      {
        nome: "Kimi Antonelli",
        imagem:"imgsPilotos/Antonelli.jpg"
      },
    ]
  },

  {
    id: 5,
    nome: "Aston Martin",
    imagem: "imgs/aston.png",
    descricao:"Clássica marca britânica com um projeto ambicioso na Fórmula 1",
    motor: "Honda RA626H",
    pais: "Reino Unido",
    fundacao: "1913(Marca) e 2021 na formula 1",
    titulo: "0 Titulos",
    pilotos: [
      {
        nome: "Fernando Alonso",
        imagem:"imgsPilotos/Alonso.jpg"
      },

      {
        nome: "Lance Stroll",
        imagem:"imgsPilotos/Stroll.jpg"
      }
    ]
  },

  {
    id: 6,
    nome: "Alpine",
    imagem: "imgs/alpine.png",
    descricao: "Equipe francesa que carrega a herança e tradição esportiva da Renault",
    motor: "Renault",
    pais: "França",
    fundacao: "2021(mudança de nome da Renaut para Alpine",
    titulo: "Campeã em 2005 e 2006",
    pilotos: [
      {
        nome: "Pierre Gasly",
        imagem: "imgsPilotos/Gasly.jpg"
      },

      {
        nome: "Franco Colapinto",
        imagem: "imgsPilotos/Colapinto.jpg"
      }
    ]
  },

  {
    id: 7,
    nome: "Haas",
    imagem: "imgs/haas.png",
    motor: "Ferrari",
    pilotos: "Bearman e Ocon",
    titulo: "Entrou na F1 em 2016"
  },

  {
    id: 8,
    nome: "Williams",
    imagem: "imgs/williams.png",
    motor: "Mercedes",
    pilotos: "Albon e Sainz",
    titulo: "9 títulos mundiais"
  },

  {
    id: 9,
    nome: "RB",
    imagem: "imgs/rb.png",
    motor: "Honda RBPT",
    pilotos: "Tsunoda e Ricciardo",
    titulo: "Antiga AlphaTauri"
  },

  {
    id: 10,
    nome: "Audi",
    imagem: "imgs/audi.png",
    motor: "Audi",
    pilotos: "Ainda não definidos",
    titulo: "Entrada oficial em 2026"
  },

  {
    id: 11,
    nome: "Cadillac",
    imagem: "imgs/cadillac.png",
    motor: "Ferrari",
    pilotos: "Ainda não definidos",
    titulo: "Estreia em 2026"
  }

];

const container = document.getElementById("cards-container");

if (container) {

  equipes.forEach(equipe => {

    container.innerHTML += `

      <article class="card ${equipe.nome === 'Cadillac' ? 'destaque' : ''}">

        <img src="${equipe.imagem}" alt="${equipe.nome}">

        <h3>${equipe.nome}</h3>


        <a href="detalhes.html?id=${equipe.id}">
          <button>Ver mais...</button>
        </a>

      </article>

    `;

  });

}

const detalhes = document.getElementById("detalhes-container");

if (detalhes) {

  const parametros = new URLSearchParams(window.location.search);

  const id = Number(parametros.get("id"));

  const equipe = equipes.find(item => item.id === id);

  console.log(equipes);

  if (equipe) {

    let pilotosHTML = "";

    equipe.pilotos.forEach(piloto => {

      pilotosHTML += `

      <div class="piloto-card">

        <img src="${piloto.imagem}" alt="${piloto.nome}" width="150">

        <h3>${piloto.nome}</h3>

      </div>

    `;

    });

    detalhes.innerHTML = `

<section class="card-detalhes">

    <img src="${equipe.imagem}" alt="${equipe.nome}">

    <h1>${equipe.nome}</h1>

    <p><strong>Motor:</strong> ${equipe.motor}</p>

    <p><strong>País:</strong> ${equipe.pais}</p>

    <p><strong>Fundação:</strong> ${equipe.fundacao}</p>

    <p><strong>Títulos:</strong> ${equipe.titulo}</p>

    <p><strong>Descrição:</strong> ${equipe.descricao}</p>

</section>

<h2 class="mt-4">Pilotos da Equipe</h2>

<div class="pilotos-grid">

${equipe.pilotos.map(piloto => `

  <div class="card">
    
      <img src="${piloto.imagem}" alt="${piloto.nome}">

      <h4>${piloto.nome}</h4>

  </div>

`).join("")}

</div>

<br>

<a href="index.html">
    <button>Voltar para Home</button>
</a>

`;
  }
}