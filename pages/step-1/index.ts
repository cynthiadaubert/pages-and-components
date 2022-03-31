export function initStepOne({ goTo }) {
  const div = document.createElement("div");
  div.innerHTML = `

      <div>
        <custom-header></custom-header>
      </custom-header></div>
      
      <custom-text variant="title" class="welcome">Necesitamos algunos datos más</custom-text>

      <div>
        <text-field label="Email" class="welcome"></text-field>
      </div>
      <div>
        <text-field label="Comida favorita" class="welcome"></text-field>
      </div>
      <div>
        <select-field class="welcome"></select-field>
      </div>
      <div>
        <custom-button class="start-button welcome">Continuar</custom-button>
      </div>
      <div>
        <custom-footer></custom-footer>
      </div>
              
      `;

  const startButtonElem = div.querySelector(".start-button");
  startButtonElem.addEventListener("click", () => {
    goTo("/thank-you");
  });
  return div;
}
