import { state } from "../../state";

export function initCard() {
  function render() {
    let { list } = state.getState();
    console.log(list);

    const cardlist: Element = document.querySelector("#cards")!;
    cardlist.innerHTML = "";

    for (const card of list) {
      const div = document.createElement("div");
      div.classList.add("card");

      div.innerHTML = /*html*/ `               
              <div class="div-cheack">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="div-paragraph">
                <p class="paragraph">${card}</p>
              </div>
              <div class="div-button">
                <button class="button-editar">🖍</button>
                <button class="button-clear">🗑</button>
              </div>                                    
      `;
      cardlist.append(div);
    }
  }
  state.subscribe(render);
  return render();
}
