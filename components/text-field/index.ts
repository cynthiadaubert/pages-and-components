export function initTextFieldComp() {
  customElements.define(
    "text-field",

    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }

      render() {
        const label = this.getAttribute("label");
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        style.innerHTML = `

            .label{
           display: block;
            }

            .input{
            font-size: 18px;
            border: solid 2px;
            border-radius: 4px;
            width: 250px;
            padding: 17px 13px 17px 13px;
        
            }
      
            `;

        div.innerHTML = `
            <label class="label welcome"><custom-text>${label}</custom-text></label>
            <input type="text" class="input"/>

            `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
