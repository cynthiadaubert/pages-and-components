export function initHeaderComp() {
  customElements.define(
    "custom-header",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const header = document.createElement("button");
        const style = document.createElement("style");
        header.className = "header";

        style.innerHTML = `
  
              .header {
                width: 100%;
                height: 60px;
                background-color: #FF8282;
                border: none;
                margin: 0;
                padding: 0;
              }
        
              `;
        /*    button.textContent = this.textContent; */
        shadow.appendChild(header);
        shadow.appendChild(style);
      }
    }
  );
}
