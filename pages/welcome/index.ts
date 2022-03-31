export function initWelcome({ goTo }) {
  const div = document.createElement("div");
  /*   div.className = "welcome"; */
  div.innerHTML = `

      <div>
        <custom-header></custom-header>
      </custom-header></div>
      
      <custom-text variant="title" class="welcome">Te damos la bienvenida a esta página</custom-text>
      <custom-text variant="body-article" class="welcome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?</custom-text>
      <custom-text variant="subtitle" class="welcome">Para continuar ingresá tu nombre</custom-text>
      <div>
        <text-field label="Nombre" class="welcome"></text-field>
      </div>
      <div>
        <custom-button class="start-button welcome">Comenzar</custom-button>
      </div>
      <div>
        <custom-footer></custom-footer>
      </div>
              
      `;

  const startButtonElem = div.querySelector(".start-button");
  startButtonElem.addEventListener("click", () => {
    //   console.log("clickkkk")
    goTo("/step-1");
  });
  return div;
}
