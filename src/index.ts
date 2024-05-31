import "./components/button/button";
import "./components/input/input";
import { initCard } from "./pages/card/card";
// Importo mi state
import { state } from "./state";

initCard();
// Este es es boton que agrega una card(cada card es una nueva tarea)
const buttonAdd = document.querySelector("#btn-add");
buttonAdd!.addEventListener("click", () => {
  const inputValue: HTMLInputElement = document.querySelector(
    ".agregar-tarea-input"
  )!;
  //si tiene contenido el input agrego un item a mi data.list
  if (inputValue.value) {
    state.addItem(inputValue.value);
  } else {
    alert("Ingresa una tarea");
  }
});

// state.setState({ list: ["Eze"] });

// const currentState = state.getState();
