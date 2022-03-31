export function initButtonComp() {
  customElements.define(
    "custom-button",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "root";

        style.innerHTML = `

            .root {
                width: 100%;
                height: 55px;
                border: none;
                background-color: #9CBBE9;
                font-size: 22px;
                margin-top: 16px;
            }
      
            `;
        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
      }
    }
  );
}
