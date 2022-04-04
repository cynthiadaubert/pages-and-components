export function initStepOne({ goTo }) {
  const div = document.createElement("div");
  div.innerHTML = `

      <div>
        <custom-header></custom-header>
      </custom-header></div>
    <custom-text variant="title" class="welcome">Necesitamos algunos datos más</custom-text>
      <div class="container">
         
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
          <custom-button class="start-button">Continuar</custom-button>
        </div>

      </div>  
        <div>
          <custom-footer></custom-footer>
        </div>
              
      `;

  const startButtonElem = div.querySelector(".start-button");
  const shadowButton = startButtonElem.shadowRoot;
  const shadowButtonElem = shadowButton.querySelector(".root");
  shadowButtonElem.addEventListener("click", () => {
    //   console.log("clickkkk")
    goTo("/thank-you");
  });
  return div;
}
