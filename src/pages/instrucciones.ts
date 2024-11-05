import { state } from "../state";

export function instruccionesPage(params: { goTo: (arg: string) => void }) {
  console.log("instruccionesPage encontrado");
  let div = document.createElement("div");
  div.innerHTML = /*html*/ `
  <style>.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.div-text {
  width: 317px;
  height: 380px;
}
.div-text-p {
  font-family: var(--fuente-odibee);
  font-size: 3rem;
  letter-spacing: 0.11rem;
  font-weight: 800;
  text-align: center;
}
.div-button {
  height: 100px;
}
.container-manos {
  padding: 0 10px;
  min-width: 370px;
  position: fixed;
  display: flex;
  bottom: -40px;
  flex-direction: row;
  gap: 40px;
}
.container-manos img {
  width: 100px;
  height: 250px;
}
</style>
<div class="container">
      <div class="div-text">
        <p class="div-text-p">
          Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los
          3 segundos.
        </p>
      </div>
      <div class="button">
        <button-el>Jugar!</button-el>
      </div>
      <div class="container-manos">
        <img src="/ppt-modulo5/papel.svg" alt="" />
        <img src="/ppt-modulo5/piedra.svg" alt="" />
        <img src="/ppt-modulo5/tijera.svg" alt="" />
      </div>
    </div>
  `;
  const buttonEl = div.querySelector("button-el");
  console.log(buttonEl);
  state.data.scores.computerScore = 0;
  state.data.scores.myScore = 0;

  localStorage.removeItem("saved-state");
  buttonEl?.addEventListener("click", () => {
    params.goTo("/elige");
  });
  return div;
}
