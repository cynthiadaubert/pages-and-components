export function initSelectFieldComp() {
  customElements.define(
    "select-field",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `
  
              .label{
             display: block;
             width:100%;
             font-family: Roboto;

             
              }
  
              .option{
              font-size: 18px;
              border: solid 2px;
              border-radius: 4px;
              padding: 17px 13px 17px 13px;
              heigth: 55px;
              font-family: Roboto;
              }
        
              `;

        div.innerHTML = `
        
            <label for="select" class="label">Alguna de estas tres opciones</label>

              <select class="label option">
                <option class="option">Piedra</option>
                <option class="option">Papel</option>
                <option class="option">Tijera</option>
              </select>
              `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
