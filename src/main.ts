import "./components/estrella/estrella";
import "./components/button/button";
import "./components/score/score";
import "./components/text/text";
import { initRouter } from "./router";

console.log("cargo main.ts");
(function main() {
  console.log("arranco la funcion main");
  let app: HTMLDivElement = document.querySelector("#app")!;
  if (!app) {
    throw new Error("Elemento #app no encontrado");
  }
  initRouter(app);

  console.log("termino la funcion main");
})();

// initHome(app);
// instruccionesPage(app);
// eligePage(app);
// resultadoPage(app);
