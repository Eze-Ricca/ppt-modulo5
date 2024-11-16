export type Jugada = "piedra" | "papel" | "tijera" | "";

type Game = {
  myPlay: Jugada | "";
  computerPlay: Jugada | "";
};

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
    const savedState = localStorage.getItem("saved-state");
    if (!savedState) {
      this.setState(this.data); // Inicializa con el estado por defecto
    } else {
      const localData = JSON.parse(savedState);
      this.setState(localData);
    }
  },

  getState() {
    return this.data;
  },

  setState(newData: Partial<typeof this.data>) {
    this.data = { ...this.data, ...newData };
    this.listeners.forEach((callback) => callback());
    localStorage.setItem("saved-state", JSON.stringify(this.data));
    console.log("Soy el state, he cambiado", this.data);
  },

  subscribe(callback: (state: any) => void) {
    this.listeners.push(callback);
  },

  setComputerMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.computerPlay = move;
    this.setState(currentState);
  },

  setMove(move: Jugada) {
    const currentState = this.getState();
    currentState.currentGame.myPlay = move;
    this.setState(currentState);
  },

  whoWins() {
    const myPlay: Jugada = this.data.currentGame.myPlay;
    const computerPlay: Jugada = this.data.currentGame.computerPlay;
    const ganeconTijera = myPlay === "tijera" && computerPlay === "papel";
    const ganeConPiedra = myPlay === "piedra" && computerPlay === "tijera";
    const ganeConPapel = myPlay === "papel" && computerPlay === "piedra";
    // const perdiDeUna = myPlay === "";

    const gane = [ganeconTijera, ganeConPiedra, ganeConPapel].includes(true);
    const empate = myPlay === computerPlay;
    if (empate) {
      // this.data.scores.myScore += 0;
      // this.data.scores.computerScore += 0;
    } else if (gane) {
      this.data.scores.myScore += 1;
    } else {
      this.data.scores.computerScore += 1;
    }

    this.setState(this.data);
    return this.data.scores;
  },

  resetCurrentGame() {
    this.data.currentGame = {
      myPlay: "",
      computerPlay: "",
    };
    this.setState(this.data);
  },
};
