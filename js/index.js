import carrusel from "./carrusel.js";
import darkTheme from "./dark_theme.js";
import scroll from "./scroll.js";

document.addEventListener("DOMContentLoaded", event => {
  scroll()
  carrusel(5)
})

darkTheme('.btn-dark', '.icon-dark', 'dark-theme');