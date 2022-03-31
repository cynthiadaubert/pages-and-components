import { initTextsComp } from "./components/text";
import { initRouter } from "./router";
import { initTextFieldComp } from "./components/text-field";
import { initButtonComp } from "./components/button";
import { initHeaderComp } from "./components/header";
import { initFooterComp } from "./components/footer";
import { initSelectFieldComp } from "./components/select-field";

(function () {
  initHeaderComp();
  initTextsComp();
  initTextFieldComp();
  initButtonComp();
  initFooterComp();
  initSelectFieldComp();
  const root = document.querySelector(".root");

  initRouter(root);
})();
