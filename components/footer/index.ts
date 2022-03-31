export function initFooterComp() {
  customElements.define(
    "custom-footer",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const shadow = this.attachShadow({ mode: "open" });
        const footer = document.createElement("footer");
        const style = document.createElement("style");
        footer.className = "root";

        style.innerHTML = `
  
              .root {
                  width: 100%;
                  height: 233px;
                  background-color: #FFA0EA;
                  margin-top: 100px;
              }
        
              `;
        footer.textContent = this.textContent;
        shadow.appendChild(footer);
        shadow.appendChild(style);
      }
    }
  );
}
