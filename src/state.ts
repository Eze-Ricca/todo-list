// --------------------------------
// type Data = {
//   tarea: string[];
// };

const state = {
  data: {
    list: [] as string[],
  },
  listeners: [] as Function[], // los callbacks
  getState() {
    return this.data;
  },
  setState(newState: { list: string[] }): void {
    // modifica this.data (el state) e invoca los callbacks
    this.data = newState;
    for (const callback of this.listeners) {
      callback();
    }
    console.log("soy el State, he cambiado", this.data);
    // this.data = { ...this.data, ...newState };
    // this.listeners.forEach((listener) => listener(this.getState()));
  },
  subscribe(callback: Function): void {
    this.listeners.push(callback as Function); // recibe callbacks para ser avisados posteriormente
  },
  addItem(item: string) {
    // suma el nuevo item a la lista
    const currentState = this.getState();
    currentState.list.push(item);
    console.log(currentState);
    this.setState(currentState as { list: string[] });
  },
};
export { state };
