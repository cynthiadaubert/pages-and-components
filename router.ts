import { initWelcome } from "./pages/welcome";
import { initStepOne } from "./pages/step-1/index";
import { initThankYou } from "./pages/thankyou";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/step-1/,
    component: initStepOne,
  },
  {
    path: /\/thank-you/,
    component: initThankYou,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const elem = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(elem);
      }
    }
  }

  if (location.pathname /* == "./" */) {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.onpopstate = function (event) {
    handleRoute(location.pathname);
    console.log(
      "location: " +
        document.location +
        ", state: " +
        JSON.stringify(event.state)
    );
  };
}
