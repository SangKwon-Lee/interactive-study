import App from "./js/app.js";

const app = new App();

window.addEventListener("load", () => {
  app.init();
  app.render();
});
