class InputEl extends HTMLElement {
  static get style() {
    return /*css*/ `       
        
        input{
            width: 100%;
            background-color: #c4c4c4;
            border: none;
            border-radius: 4px;
            padding: 10px;    
            
          }
        `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${InputEl.style}</style>           
            <input type="text" />       
        `;
  }
}
customElements.define("input-el", InputEl);
