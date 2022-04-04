export function initThankYou({ goTo }) {
  const div = document.createElement("div");
  div.innerHTML = `

      <div>
        <custom-header></custom-header>
      </custom-header></div>
      <custom-text variant="title" class="welcome">Gracias</custom-text>
      <div class="container">
        
        <custom-text variant="subtitle" class="welcome">Toda la información que nos brindaste es muy importante</custom-text>
        <custom-button class="start-button welcome">De nada</custom-button>
      </div>


      <div>
        <custom-footer></custom-footer>
      </div>
              
      `;

  return div;
}
