export type Jugada = "piedra" | "papel" | "tijera" | "";

type Game = {
  myPlay: Jugada | "";
  computerPlay: Jugada | "";
};
const choices: Jugada[] = ["piedra", "papel", "tijera"];
export const state = {
  data: {
    currentGame: {
      myPlay: "",
      computerPlay: "",
    } as Game,
    scores: {
      myScore: 0,
      computerScore: 0,
    },
  },

  listeners: [] as Function[],

  init() {
    this.setState(this.data);
  },

  getState() {
    return this.data;
  },

  setState(newData: Partial<typeof this.data>) {
    this.data = { ...this.data, ...newData };
    this.listeners.forEach((callback) => callback());
    console.log("Soy el state, he cambiado", this.data);
  },

  subscribe(callback: (state: any) => void) {
    this.listeners.push(callback);
  },

  setComputerMove() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerMove = choices[randomIndex];

    this.data.currentGame.computerPlay = computerMove;
    this.setState(this.data);

    return computerMove;
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.setState(currentState);
  },

  // Funcion para determinar el ganador - funcion nueva
  determineWinner(playerChoice: Jugada, computerChoice: Jugada) {
    if (playerChoice === computerChoice) {
      return "empate";
    }
    if (
      (playerChoice === "piedra" && computerChoice === "tijera") ||
      (playerChoice === "papel" && computerChoice === "piedra") ||
      (playerChoice === "tijera" && computerChoice === "papel")
    ) {
      return "jugador";
    }
    return "computadora";
  },
  // Funcion principal del juego - Funcion nueva
  playGame(playerChoice: Jugada) {
    const computerChoice = this.data.currentGame.computerPlay; // Usa la jugada ya generada

    if (!computerChoice) {
      console.warn("La jugada de la computadora no está definida.");
      return;
    }

    const winner = this.determineWinner(playerChoice, computerChoice);

    if (winner === "jugador") {
      this.data.scores.myScore += 1;
    } else if (winner === "computadora") {
      this.data.scores.computerScore += 1;
    }

    this.setState(this.data);
  },

  resetCurrentGame() {
    this.data.currentGame = {
      myPlay: "",
      computerPlay: "",
    };
    this.setState(this.data);
    // restablecer la seleccion visual de las manos
    const botones = document.querySelectorAll(".general");
    botones.forEach((boton) => boton.classList.remove("active"));
  },
};
