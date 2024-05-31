class ButtonEl extends HTMLElement {
  static get styleBase() {
    return /*css*/ `
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
      `;
  }
  static get styleConColor() {
    return /*css*/ `
      button{
          background-color: red;
          border: solid 2px transparent; 
      }   
      `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>${ButtonEl.styleBase}</style>    
      `;

    this.shadowRoot!.innerHTML += /*html*/ `
      <button>
         ${this.hasAttribute("contenido") ? this.getAttribute("contenido") : ""}
      </button>  
      `;

    if (this.hasAttribute("conColor")) {
      this.shadowRoot!.innerHTML += /*html*/ `
            <style>${ButtonEl.styleConColor}</style>
            `;
    }
  }
}
customElements.define("button-el", ButtonEl);
