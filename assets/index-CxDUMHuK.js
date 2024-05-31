(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();class i extends HTMLElement{static get styleBase(){return`
      button{
          width:50px;
          height: 50px;
          background-color: green;

          width: 50px;
          height: 50px;
          border: none;
          background-color: rgb(66, 246, 6);

          border-radius: 4px;
          font-family: "Poppins", sans-serif;
          font-weight: 600;     
          font-size: 30px;
          cursor: pointer;       
      }
      `}static get styleConColor(){return`
      button{
          background-color: red;
          border: solid 2px transparent; 
      }   
      `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>${i.styleBase}</style>    
      `,this.shadowRoot.innerHTML+=`
      <button>
         ${this.hasAttribute("contenido")?this.getAttribute("contenido"):""}
      </button>  
      `,this.hasAttribute("conColor")&&(this.shadowRoot.innerHTML+=`
            <style>${i.styleConColor}</style>
            `)}}customElements.define("button-el",i);class d extends HTMLElement{static get style(){return`       
        
        input{
            width: 100%;
            background-color: #c4c4c4;
            border: none;
            border-radius: 4px;
            padding: 10px;    
            
          }
        `}constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
        <style>${d.style}</style>           
            <input type="text" />       
        `}}customElements.define("input-el",d);const c={data:{list:[]},listeners:[],getState(){return this.data},setState(e){this.data=e;for(const o of this.listeners)o();console.log("soy el State, he cambiado",this.data)},subscribe(e){this.listeners.push(e)},addItem(e){const o=this.getState();o.list.push(e),console.log(o),this.setState(o)}};function l(){function e(){let{list:o}=c.getState();console.log(o);const s=document.querySelector("#cards");s.innerHTML="";for(const n of o){const t=document.createElement("div");t.classList.add("card"),t.innerHTML=`               
              <div class="div-cheack">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="div-paragraph">
                <p class="paragraph">${n}</p>
              </div>
              <div class="div-button">
                <button class="button-editar">🖍</button>
                <button class="button-clear">🗑</button>
              </div>                                    
      `,s.append(t)}}return c.subscribe(e),e()}l();const u=document.querySelector("#btn-add");u.addEventListener("click",()=>{const e=document.querySelector(".agregar-tarea-input");e.value?c.addItem(e.value):alert("Ingresa una tarea")});
