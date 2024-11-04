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

//CODIGO DE PRUEBA
function isGithubPages() {
  return location.host.includes("github.io");
}
//---------------------------------
export function initRouter(rootEl: Element): void {
  // PRUEBA
  const BASE_PATH = isGithubPages() ? "/ppt-modulo5" : "/";
  // Funcion utilitaria que pasa a la vista seleccionada para poder navegar a otras rutas
  function goTo(path: string): void {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    console.log("navegando a la ruta:", completePath);
    history.pushState({}, "", completePath);
    handlerRoute(completePath);
  }
  // -----------------------------
  function handlerRoute(route: string): void {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    console.log("manejando la ruta:", newRoute);
    if (route === "/") {
      goTo("/home");
    }

    routes.forEach((r: Route) => {
      //Busca la ruta que coincida con el path
      if (r.path.test(newRoute)) {
        console.log("ruta encontrada: ", newRoute);
        const viewEl = r.component({ goTo: goTo }); //Genera la vista desde el componente
        rootEl.innerHTML = ""; // Limpia el HTML
        rootEl.appendChild(viewEl);
      }
    });
  }

  if (location.pathname.replace(/\/$/, "") == BASE_PATH) {
    goTo("/welcome");
  } else {
    //Ejecuta el handlerRoute con la ruta tomada de la url
    handlerRoute(location.pathname);
  }
  //Escucha el evento popstate para actualizar la visata cuando se navega para adelante o para atras
  window.addEventListener("popstate", () => {
    handlerRoute(location.pathname);
  });
}
