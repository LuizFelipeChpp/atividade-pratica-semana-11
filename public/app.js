const equipes = [

  {
    id: 1,
    nome: "McLaren",
    imagem: "imgs/mclaren.png",
    motor: "Mercedes",
    pilotos: "Lando Norris e Oscar Piastri",
    titulo: "9 títulos mundiais"
  },

  {
    id: 2,
    nome: "Red Bull Racing",
    imagem: "imgs/redbull.png",
    motor: "Honda RBPT",
    pilotos: "Max Verstappen e Sergio Pérez",
    titulo: "6 títulos mundiais"
  },

  {
    id: 3,
    nome: "Ferrari",
    imagem: "imgs/ferrari.png",
    motor: "Ferrari",
    pilotos: "Charles Leclerc e Lewis Hamilton",
    titulo: "16 títulos mundiais"
  },

  {
    id: 4,
    nome: "Mercedes",
    imagem: "imgs/mercedes.png",
    motor: "Mercedes",
    pilotos: "George Russell e Antonelli",
    titulo: "8 títulos consecutivos"
  },

  {
    id: 5,
    nome: "Aston Martin",
    imagem: "imgs/aston.png",
    motor: "Mercedes",
    pilotos: "Fernando Alonso e Lance Stroll",
    titulo: "Nova fábrica tecnológica"
  },

  {
    id: 6,
    nome: "Alpine",
    imagem: "imgs/alpine.png",
    motor: "Renault",
    pilotos: "Pierre Gasly e Doohan",
    titulo: "Campeã em 2005 e 2006"
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

    detalhes.innerHTML = `

      <section class="card-detalhes">

        <img src="${equipe.imagem}" alt="${equipe.nome}">

        <h1>${equipe.nome}</h1>

        
        <br>

        <p><strong>Motor:</strong> ${equipe.motor}</p>

        <p><strong>Pilotos:</strong> ${equipe.pilotos}</p>

        <p><strong>Conquistas:</strong> ${equipe.titulo}</p>

        <br>

        <a href="index.html">
          <button>Voltar para Home</button>
        </a>

      </section>

    `;

  } 

}
