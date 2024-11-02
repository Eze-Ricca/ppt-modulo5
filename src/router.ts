//rutas
import { initHome } from "./pages/inicio";
import { instruccionesPage } from "./pages/instrucciones";
import { eligePage } from "./pages/elige";
import { resultadoPage } from "./pages/resultado";

//Tipo para las rutas
type Route = {
  path: RegExp;
  component: Function;
};

const routes: Route[] = [
  {
    path: /\/home/,
    component: initHome,
  },
  {
    path: /\/instrucciones/,
    component: instruccionesPage,
  },
  {
    path: /\/elige/,
    component: eligePage,
  },
  {
    path: /\/resultado/,
    component: resultadoPage,
  },
];

export function initRouter(rootEl: Element): void {
  function router(route: string): void {
    if (route === "/") {
      goTo("/home");
    }
    routes.forEach((r: Route) => {
      //Busca la ruta que coincida con el path
      if (r.path.test(route)) {
        const viewEl = r.component({ goTo: goTo }); //Genera la vista desde el componente
        rootEl.innerHTML = ""; // Limpia el HTML
        rootEl.appendChild(viewEl);
      }
    });
  }

  // Funcion utilitaria que pasa a la vista seleccionada para poder navegar a otras rutas
  function goTo(uri: string): void {
    history.pushState({}, "", uri);
    router(uri);
  }

  //Ejecuta el router con la ruta tomada de la url
  router(location.pathname);

  //Escucha el evento popstate para actualizar la visata cuando se navega para adelante o para atras
  window.addEventListener("popstate", () => {
    router(location.pathname);
  });
}
