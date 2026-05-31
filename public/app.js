const equipes = [

  {
    id: 1,
    nome: "McLaren",
    destaque: true,
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
    destaque: true,
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
    destaque: true,
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
    destaque: true,
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
    destaque: false,
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
    destaque: false,
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
    destaque: false,
    imagem: "imgs/haas.png",
    descricao: "Única equipe americana do grid, focada em eficiência e fortes parcerias técnicas",
    motor: "Ferrari",
    pais: "Estados Unidos",
    fundacao: "2016",
    titulo: "0 Titulos",
    pilotos: [
      {
        nome: "Esteban Ocon",
        imagem: "imgsPilotos/Ocon.jpg"
      },

      {
        nome: "Oliver Bearman",
        imagem:" imgsPilotos/Bearman.jpg",
      },
    ]
  },

  {
    id: 8,
    nome: "Williams",
    destaque: false,
    imagem: "imgs/williams.png",
    descricao: "Histórica escuderia britânica em processo de reconstrução para reviver seus dias de glória",
    motor: "Mercedes-AMG",
    pais: "Reino Unido",
    fundacao: "1997",
    titulo: "9 títulos mundiais",
    pilotos: [
      {
        nome: "Alexander Albon",
        imagem: "imgsPilotos/Albon.jpg"
      },
      
      {
        nome: "Carlos Sainz",
        imagem: "imgsPilotos/Sainz.jpg"
      }
    ]
  },

  {
    id: 9,
    nome: "RB",
    destaque: false,
    imagem: "imgs/rb.png",
    descricao: "Equipe italiana irmã da Red Bull, focada em revelar talentos e competir no meio do grid",
    motor: "Red Bull Ford Powertrains",
    pais: "Itália",
    fundacao: "2024, ano que assumiu essa nova identidade",
    titulo: "0 Titulos",
    pilotos: [
      {
        nome: "Yuki Tsunoda",
        imagem: "imgsPilotos/Tsunoda.jpg"
      },

      {
        nome: "Liam Lawson",
        imagem: "imgsPilotos/Lawson.jpg"
      }
    ]
  },

  {
    id: 10,
    nome: "Audi",
    destaque: false,
    imagem: "imgs/audi.png",
    descricao:"Gigante automotiva alemã que estreia na Fórmula 1 como equipe de fábrica",
    motor: "Audi",
    pais: "Alemanhã",
    fundacao: "2026, ano que estreiou oficialmente na categoria",
    titulo: "0 titulos",
    pilotos: [
      {
        nome: "Gabriel Bortoleto",
        imagem: "imgsPilotos/Bortoleto.jpg"
      },

      {
        nome: "Nico Hülkenberg",
        imagem: "imgsPilotos/Hulkenberg.jpg"
      }

    ]
  },

  {
    id: 11,
    nome: "Cadillac",
    destaque: false,
    imagem: "imgs/cadillac.png",
    descricao: "A 11ª equipe do grid, marcando a entrada oficial da General Motors na F1",
    motor: "Ferrari",
    pais: "Estados Unidos",
    fundacao:"2026, ano de estreia na f1",
    titulo: "0 titulos",
    pilotos: [
      {
        nome: "Sergio Pérez",
        imagem: "imgsPilotos/Perez.jpg"
      },

      {
        nome: "Valtteri Bottas",
        imagem: "imgsPilotos/Bottas.jpg"
      }
    ]
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




const carousel = document.getElementById("carousel-container");

if (carousel) {

  const destaques = equipes.filter(equipe => equipe.destaque);

  destaques.forEach((equipe, index) => {

    carousel.innerHTML += `

      <div class="carousel-item ${index === 0 ? "active" : ""}">

        <img
          src="${equipe.imagem}"
          class="d-block w-100 carousel-img"
          alt="${equipe.nome}">

        <div class="carousel-caption">

          <h3>${equipe.nome}</h3>

          <p>${equipe.descricao}</p>

          <a href="detalhes.html?id=${equipe.id}">
            <button>Ver equipe</button>
          </a>

        </div>

      </div>

    `;

  });

}