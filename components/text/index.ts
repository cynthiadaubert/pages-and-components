export function initTextsComp() {
  class TextComponent extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "body";
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `

      * {
        box-sizing: border-box;
        font-family: Roboto;
      }
      .title{
        font-size: 52px;
        font-weight: bold;
        text-align: left;
        padding: 40px 0px 30px 0px;
        
      }

      .subtitle {
        font-size: 22px;
        font-weight: bold;
      }

      .body-article{
        font-size: 18px;
        font-family: Roboto;
        margin-bottom: 70px;
      }
      
      `;

      div.className = variant;
      div.textContent = this.textContent;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("custom-text", TextComponent);
}
