import darkTheme from "./dark_theme.js";
import scroll from "./scroll.js";

document.addEventListener("DOMContentLoaded", event => {
  scroll()
})

darkTheme('.btn-dark', '.icon-dark', 'dark-theme');