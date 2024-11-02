var j=Object.defineProperty;var E=(t,e,o)=>e in t?j(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var f=(t,e,o)=>(E(t,typeof e!="symbol"?e+"":e,o),o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();class v extends HTMLElement{static get style(){return`
    .container {
        position: relative;
        width: 380px;
        height: 380px;
      }
      .estrella-text {
        font-family: var(--fuete-odibee);
        letter-spacing: 0.5rem;
        font-size: 2.2rem;
        z-index: 2;
        color: #ffffff; /* Cambiar el color del texto a blanco para que contraste con el fondo rojo */
        position: absolute;
        top: 35%; /* Centrar verticalmente */
        left: 48%; /* Centrar horizontalmente */
        transform: translate(
          -50%,
          -50%
        ); /* Ajustar para que el centro del texto coincida con el centro de la estrella */
      }
      .estrella {
        position: absolute;
        z-index: 1;
        width: 330px;
        height: 330px;
        top: 14px;
        bottom: auto;
        left: 14px;
        right: 0px;
        background-color: var(--estrella-win);
        clip-path: polygon(
          50% 0%,
          67% 28%,
          98% 35%,
          79% 55%,
          93% 100%,
          52% 79%,
          10% 100%,
          23% 60%,
          2% 35%,
          33% 26%
        );
      }
      .estrella2 {
        width: 360px;
        height: 360px;
        background-color: rgb(15, 15, 15);
        clip-path: polygon(
          50% 0%,
          67% 28%,
          98% 35%,
          79% 55%,
          93% 100%,
          52% 79%,
          10% 100%,
          23% 60%,
          2% 35%,
          33% 26%
        );
      }     
      .estrella-invertida{
        transform: rotatex(180deg);  
        background-color: var(--estrella-loser);
     
      } 
      .estrella-invertida2{
        transform: rotatex(180deg);  
        background-color: black;
      }   
       `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){if(this.shadowRoot.innerHTML=`
    <style>${v.style}</style>
    <div class="container">
      <div class="estrella"></div>
      <div class="estrella2"></div>
      <h3 class="estrella-text">Ganaste!</h3>
    </div>
    `,this.hasAttribute("invertida")){const e=this.shadowRoot.querySelector(".estrella"),o=this.shadowRoot.querySelector(".estrella2"),a=this.shadowRoot.querySelector(".estrella-text");e.setAttribute("class","estrella estrella-invertida"),o.setAttribute("class","estrella2 estrella-invertida2"),a.textContent="Perdiste!"}}}customElements.define("estrella-el",v);class x extends HTMLElement{static get style(){return`
    button {
        font-family: var(--fuente-odibee);
        font-size: 3rem;
        letter-spacing: 0.15rem;
        color: var(--button-font);
        min-width: 380px;
        height: 84px;
        background-color: var(--color-button);
        border: solid 10px var(--color-borderbutton);
        border-radius: 10px;
        transition: ease-in-out 0.25s;
        cursor: pointer;
      }
      button:hover {
        background-color: var(--color-borderbutton);
        border: solid 10px var(--color-button);
      }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const e=this.getAttribute("class");this.shadowRoot.innerHTML=`
    <style>${x.style}</style>
    <button class="${e}"><slot></slot></button>

    `}}customElements.define("button-el",x);class b extends HTMLElement{static get style(){return`
    .container {
        box-sizing: border-box;
        font-family: var(--fuente-odibee);
        font-size: 1.5rem;
        width: 259px;
        height: 187px;
        background-color: white;
        color: black;
        border: solid 10px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        margin: 0;
      }
      .container h3 {
        /* margin: 0; */
        text-align: center;
        letter-spacing: 0.5rem;
        margin-top: 10px;
      }
      .container-p {
        flex-grow: 1;
        width: 100%;
        height: 140px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .p-maquina,
      .p-persona {
        margin: 0;
        text-align: end;
        letter-spacing: 0.5rem;
      }
    `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>${b.style}</style>
    <div class="container">
      <h3>Score</h3>
      <div class="container-p">
        <p class="p-persona">Vos: 3</p>
        <p class="p-maquina">Maquina: 3</p>
      </div>
    </div>
    `}}customElements.define("score-el",b);class k extends HTMLElement{constructor(){super();f(this,"tags",["h1","p"]);f(this,"tag","p");this.attachShadow({mode:"open"}),this.tags.includes(this.getAttribute("tag"))&&(this.tag=this.getAttribute("tag")||this.tag),console.log(this.tag),this.render()}static get style(){return""}render(){const o=document.createElement(this.tag);o.textContent=this.textContent,this.shadowRoot.append(o)}}customElements.define("text-el",k);function C(t){const e=document.createElement("div");e.innerHTML=`
  <style>
  .contenedor{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    margin-top: 20px;
    margin-bottom: 25px;
    padding: 20px;
    width: 380px;
    height: 330px;
    overflow-wrap: anywhere;
  }
  .title h1 {
    text-align: center;
    margin: 0;
    font-family: var(--fuente-odibee);
    letter-spacing: 0.25rem;
    font-size: 5.5rem;
    color: var(--color-h1);
  }
  
  .title h1 span {
    color: #0090485a;
  }
  .div-button{
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
  <div class="contenedor">
  <div class="title">
  <h1>
    Piedra<br />
    Papel <span>ó</span> <br />Tijera
  </h1>
</div>
<div class="div-button">
<button-el>Empezar!</button-el>
</div>
<div class="container-manos">
  <img src="/papel.svg" alt="" />
  <img src="/piedra.svg" alt="" />
  <img src="/tijera.svg" alt="" />
</div>
</div>
  `;const o=e.querySelector("button-el");return console.log(o),o==null||o.addEventListener("click",()=>{t.goTo("/instrucciones")}),e}function T(t){let e=document.createElement("div");e.innerHTML=`
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
        <img src="/papel.svg" alt="" />
        <img src="/piedra.svg" alt="" />
        <img src="/tijera.svg" alt="" />
      </div>
    </div>
  `;const o=e.querySelector("button-el");return console.log(o),o==null||o.addEventListener("click",()=>{t.goTo("/elige")}),e}const l={data:{currentGame:{myPlay:"",computerPlay:""},scores:{myScore:0,computerScore:0}},listeners:[],init(){const t=localStorage.getItem("saved-state");if(!t)this.setState(this.data);else{const e=JSON.parse(t);this.setState(e)}},getState(){return this.data},setState(t){this.data={...this.data,...t},this.listeners.forEach(e=>e()),localStorage.setItem("saved-state",JSON.stringify(this.data)),console.log("Soy el state, he cambiado",this.data)},subscribe(t){this.listeners.push(t)},setComputerMove(t){const e=this.getState();e.currentGame.computerPlay=t,this.setState(e)},setMove(t){const e=this.getState();e.currentGame.myPlay=t,this.setState(e)},whoWins(t,e){const n=[t==="tijera"&&e==="papel",t==="piedra"&&e==="tijera",t==="papel"&&e==="piedra"].includes(!0);return n?this.data.scores.myScore+=1:!n&&!(t===e)&&(this.data.scores.computerScore+=1),this.setState(this.data),this.data.scores},resetCurrentGame(){this.data.currentGame={myPlay:"",computerPlay:""},this.setState(this.data)}};function L(t){const e=document.createElement("div");e.innerHTML=`
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
          <img class="piedra" src="./public/piedra.svg" alt="" />
        </button>
        <button class="general">
          <img class="papel" src="./public/papel.svg" alt="" />
        </button>
        <button class="general">
          <img class="tijera" src="./public/tijera.svg" alt="" />
        </button>
      </div>
      <div class="my-score">Jugador: <span>0</span></div>
      <div class="computer-score"> Computadora: <span>0</span></div>
    </div>
    <div class="secundario">
      <div class="div-img-maquina">
        <img class="imagen-maquina" src="./public/papel.svg" alt="" />
      </div>
      
      <div class="div-img-jugador">
        <img class="imagen-jugador" src="./public/papel.svg" alt="" />
      </div>
    </div>
  `;const o=e.querySelector(".container-manos button img.piedra"),a=e.querySelector(".container-manos button img.papel"),r=e.querySelector(".container-manos button img.tijera"),n=e.querySelector(".principal");console.log(n);const s=e.querySelector(".secundario");console.log(s);const h=e.querySelector(".imagen-maquina"),c=e.querySelector(".imagen-jugador");console.log(c),l.subscribe(()=>{const i=l.getState(),p=e.querySelector(".my-score span"),u=e.querySelector(".computer-score span");p.textContent=i.scores.myScore.toString(),u.textContent=i.scores.computerScore.toString(),h.src=`./public/${i.currentGame.computerPlay}.svg`,c.src=`./public/${i.currentGame.myPlay}.svg`}),l.init();function d(i){e.querySelectorAll(".general").forEach(m=>{m.disabled=!0,m.style.pointerEvents="none"});const u=g();l.setMove(i),l.setComputerMove(u),l.whoWins(i,u),setTimeout(()=>{l.resetCurrentGame(),location.reload()},5e3)}o.addEventListener("click",()=>d("piedra")),a.addEventListener("click",()=>d("papel")),r.addEventListener("click",()=>d("tijera"));function g(){const i=["piedra","papel","tijera"];return i[Math.floor(Math.random()*i.length)]}function S(){const i=document.querySelector(".inner-box");let p=Number(i.innerText);if(p>-2&&(i.innerText=(p-1).toString()),p<=0){const u=l.getState(),{myScore:m,computerScore:q}=u.scores;s.style.display="flex",n.style.display="none",m==2||q==2?(t.goTo("/resultado"),clearInterval(w)):setTimeout(()=>{location.reload()},5e3)}}const w=setInterval(S,1e3);return e}function M(t){const e=document.createElement("div");return e.innerHTML=`
  <style>.ganaste {
  /* display: none; */
  height: 100vh;
  background-color: var(--background-win);
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.container {
  box-sizing: border-box;
  font-family: var(--fuente-odibee);
  font-size: 1.5rem;
  width: 259px;
  height: 187px;
  background-color: white;
  color: black;
  border: solid 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0;
}
.container h3 {
  /* margin: 0; */
  text-align: center;
  letter-spacing: 0.5rem;
 }
.container-p {
  flex-grow: 1;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.p-maquina,
.p-persona {
  margin: 0;
  text-align: end;
  letter-spacing: 0.5rem;
}
/*  */
.perdiste {
  height: 100vh;
  background-color: var(--background-loser);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 50px;
}
.contenedor {
  box-sizing: border-box;
  font-family: var(--fuente-odibee);
  font-size: 1.5rem;
  width: 259px;
  height: 187px;
  background-color: white;
  color: black;
  border: solid 10px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 0;
}
.contenedor h3 {
  text-align: center;
  letter-spacing: 0.5rem;
  margin-top: 10px;
}
.contenedor-p {
  flex-grow: 1;
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.parrafo-maquina,
.parrafo-persona {
  margin: 0;
  text-align: end;
  letter-spacing: 0.5rem;
}
  </style>
  <div class="ganaste">
  <estrella-el></estrella-el>
  <div class="container">
    <h3>Score</h3>
    <div class="container-p">
      <p class="p-persona">Vos: 3</p>
      <p class="p-maquina">Maquina: 3</p>
    </div>
  </div>
  <button-el>Volver a Jugar!</button-el>
  <button-el>Ir al Inicio!</button-el>
  </div>
  <!--  -->
  <div class="perdiste">
  <estrella-el invertida></estrella-el>
  <div class="contenedor">
    <h3>Score</h3>
    <div class="contenedor-p">
    <p class="parrafo-persona">Vos: 3</p>
    <p class="parrafo-maquina">Maquina: 3</p>
    </div>
    </div>
    <button-el class="volver-jugar">Volver a Jugar!</button-el>
    <button-el>Ir al Inicio!</button-el>

  
</div>
  `,document.addEventListener("DOMContentLoaded",function(){const o=e.querySelectorAll("button-el");o[0].addEventListener("click",()=>{localStorage.removeItem("saved-state"),t.goTo("/elige")}),o[1].addEventListener("click",()=>{localStorage.removeItem("saved-state"),t.goTo("/home")}),o[2].addEventListener("click",()=>{localStorage.removeItem("saved-state"),t.goTo("/elige")}),o[3].addEventListener("click",()=>{localStorage.removeItem("saved-state"),t.goTo("/home")});let a=localStorage.getItem("saved-state").toString();const r=e.querySelector(".p-persona");r.textContent=`Vos: ${JSON.parse(a).scores.myScore}`;const n=e.querySelector(".p-maquina");n.textContent=`Maquina: ${JSON.parse(a).scores.computerScore}`;const s=e.querySelector(".parrafo-persona");s.textContent=`Vos: ${JSON.parse(a).scores.myScore}`;const h=e.querySelector(".parrafo-maquina");h.textContent=`Maquina: ${JSON.parse(a).scores.computerScore}`;let c;JSON.parse(a).scores.computerScore>JSON.parse(a).scores.myScore?c=!1:c=!0;const d=document.querySelector(".ganaste"),g=document.querySelector(".perdiste");c?(d.style.display="flex",g.style.display="none"):(d.style.display="none",g.style.display="flex")}),e}const P=[{path:/\/home/,component:C},{path:/\/instrucciones/,component:T},{path:/\/elige/,component:L},{path:/\/resultado/,component:M}];function z(t){function e(a){a==="/"&&o("/home"),P.forEach(r=>{if(r.path.test(a)){const n=r.component({goTo:o});t.innerHTML="",t.appendChild(n)}})}function o(a){history.pushState({},"",a),e(a)}e(location.pathname),window.addEventListener("popstate",()=>{e(location.pathname)})}let y=document.querySelector("#app");if(!y)throw new Error("Elemento #app no encontrado");z(y);
