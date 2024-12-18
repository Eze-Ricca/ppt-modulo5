import "./components/estrella/estrella";
import "./components/button/button";
import "./components/score/score";
import "./components/text/text";
import { initRouter } from "./router";

(function main() {
  let app: HTMLDivElement = document.querySelector("#app")!;
  if (!app) {
    throw new Error("Elemento #app no encontrado");
  }
  initRouter(app);
})();

// initHome(app);
// instruccionesPage(app);
// eligePage(app);
// resultadoPage(app);
