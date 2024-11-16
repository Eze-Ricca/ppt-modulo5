import { state, Jugada } from "../state";

export function eligePage(params: { goTo: (arg: string) => void }) {
  const divEl: HTMLDivElement = document.createElement("div");
  divEl.innerHTML = /*HTML */ `
    <style>
      /* Estilos como los que tenías anteriormente */
      .principal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
      }
      .progressbar-container {
        width: 400px;
        height: 400px;
        margin: 0px auto;
      }
      .progressbar-container .outer-box {
        border-radius: 50%;
        background-color: transparent;
        width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressbar-container .inner-box {
        font-size: 12rem;
        font-weight: 900;
        width: 180px;
        height: 0px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressbar-container svg {
        position: absolute;
      }
      .progressbar-container circle {
        fill: none;
        stroke: url(#gradientColor);
        stroke-width: 30px;
        stroke-dasharray: 1040;
        stroke-dashoffset: 1040;
        animation: loading 3.3s linear forwards;
      }
      @keyframes loading {
        100% {
          stroke-dashoffset: 0;
        }
      }
      .elige {
        font-size: 2rem;
        font-family: var(--fuente-odibee);
        text-align: center;
        margin: 0;
      }
      .my-score, .computer-score {font-family: var(--fuente-odibee);}
      .container-manos {
        position: fixed;
        bottom: -80px;
        display: flex;
        justify-content: space-between;
        max-width: 450px;
      }
      .general {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 150px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .piedra, .papel, .tijera {
        width: 100px;
        height: 300px;
       
        
        width: 100px;
        height: 300px;
        transform: scale(1) translateY(0); /* Estado inicial */
        transition: transform 0.3s ease-in-out; /* Transición suave para ambas transformaciones */ 
          }
        .general:hover .piedra,
        .general:hover .papel,
        .general:hover .tijera {
          transform: scale(1.2) translateY(-40px); /* Se agranda un 20% al hacer click */
        }
        .piedra.active,
        .papel.active,
        .tijera.active {
          transform: scale(1.2) translateY(-40px); /* Se agranda un 20% al hacer click */
        }
      .secundario {
        width: 100%;
        height: 100vh;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      .div-img-maquina, .div-img-jugador {
        width: 400px;
        height: 400px;
      }
      .div-img-maquina {
        width: 400px;
        height: 400px;
        transform: rotate(180deg);
      }
      .imagen-maquina, .imagen-jugador {
        width: 400px;
        height: 400px;
      }
      .my-score, .computer-score {
        font-size: 2rem;
      }
    </style>
    <div class="principal">
      <div class="progressbar-container">
        <div class="outer-box">
          <div class="inner-box">3</div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400">
            <defs>
              <linearGradient id="gradientColor">
                <stop offset="0%" stop-color="#006cfc" />
                <stop offset="100%" stop-color="#001997" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="160" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <h3 class="elige">Elige tu jugada antes de que se termina el tiempo!</h3>
      <div class="container-manos">
        <button class="general">
          <img class="piedra" src="/ppt-modulo5/piedra.svg" alt="" />
        </button>
        <button class="general">
          <img class="papel" src="/ppt-modulo5/papel.svg" alt="" />
        </button>
        <button class="general">
          <img class="tijera" src="/ppt-modulo5/tijera.svg" alt="" />
        </button>
      </div>
      <div class="my-score">Jugador: <span>0</span></div>
      <div class="computer-score"> Computadora: <span>0</span></div>
    </div>
    <div class="secundario">
      <div class="div-img-maquina">
        <img class="imagen-maquina" src="/ppt-modulo5/papel.svg" alt="" />
      </div>
      
      <div class="div-img-jugador">
        <img class="imagen-jugador" src="/ppt-modulo5/papel.svg" alt="" />
      </div>
    </div>
  `;

  // Aquí empieza la lógica
  const botonPiedra: HTMLImageElement = divEl.querySelector(
    ".container-manos button img.piedra"
  )!;
  const botonPapel: HTMLImageElement = divEl.querySelector(
    ".container-manos button img.papel"
  )!;
  const botonTigera: HTMLImageElement = divEl.querySelector(
    ".container-manos button img.tijera"
  )!;

  const divPrincipal: HTMLElement = divEl.querySelector(".principal")!;

  const divSecundario: HTMLElement = divEl.querySelector(".secundario")!;

  const imagenPc: HTMLImageElement = divEl.querySelector(".imagen-maquina")!;

  const imagenJugador: HTMLImageElement =
    divEl.querySelector(".imagen-jugador")!;
  // Suscríbete en el 'state' para actualizar el DOM cuando cambie
  state.subscribe(() => {
    const currentState = state.getState();

    // Actualiza el puntaje en el DOM
    const myScoreEl = divEl.querySelector(".my-score span")!;
    const computerScoreEl = divEl.querySelector(".computer-score span")!;

    myScoreEl.textContent = currentState.scores.myScore.toString();
    computerScoreEl.textContent = currentState.scores.computerScore.toString();

    // Muestra el movimiento de la computadora en pantalla
    console.log("fin de suscribe");
  });

  // Carga el estado inicial de la partida
  state.init();

  function handleMoveSelection(jugada: Jugada) {
    state.setMove(jugada);

    const currentState = state.getState();
    console.log(currentState);
    imagenPc.src = `/ppt-modulo5/${currentState.currentGame.computerPlay}.svg`;
    imagenJugador.src = `/ppt-modulo5/${currentState.currentGame.myPlay}.svg`;

    // desabilito todos los botones despues de la jugada
    const botones = divEl.querySelectorAll(
      ".general"
    ) as NodeListOf<HTMLButtonElement>;
    botones.forEach((boton) => {
      boton.disabled = true;
      boton.style.pointerEvents = `none`; // Esto previene cualquier interaccion
    });
  }
  // Función para obtener una imagen aleatoria para la computadora que tambien voy a utilizar para darle el valor
  // a la jugada de la compu
  function getRandomImage() {
    const imagenesCompu = ["piedra", "papel", "tijera"];
    return imagenesCompu[
      Math.floor(Math.random() * imagenesCompu.length)
    ] as Jugada;
  }
  // Establece la jugada del usuario y la computadora
  // Reinicia la pantalla después de 1 segundo para una nueva ronda
  setTimeout(() => {
    console.log("setTimOut");
    const currentState = state.getState(); // Obtener el estado actual
    const computerMove = getRandomImage();
    state.setComputerMove(computerMove);
    console.log("soy el timeOut", state);
    state.whoWins();
    if (
      currentState.scores.computerScore == 2 ||
      currentState.scores.myScore == 2
    ) {
      params.goTo("/resultado");
    } else {
      params.goTo("/elige");
      // state.resetCurrentGame();
    }
  }, 5000);

  // Agrega manejadores a los botones
  botonPiedra.addEventListener("click", () => handleMoveSelection("piedra"));
  botonPapel.addEventListener("click", () => handleMoveSelection("papel"));
  botonTigera.addEventListener("click", () => handleMoveSelection("tijera"));

  function actualizarContador() {
    const contador: HTMLElement = document.querySelector(".inner-box")!;
    let valorActual = Number(contador!.innerText);
    console.log("setinterval");
    if (valorActual > -2) {
      contador.innerText = (valorActual - 1).toString();
    }

    if (valorActual <= 0) {
      divSecundario.style.display = "flex";
      divPrincipal.style.display = "none";
      clearInterval(intervalo); // Detener el intervalo
    }
  }

  const intervalo = setInterval(actualizarContador, 1000);

  return divEl;
}
