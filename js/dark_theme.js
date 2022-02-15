export default function darkTheme(btn, icon, classDark) {
  let ls = localStorage

  const $themeBtn = document.querySelectorAll(icon),
        $selectors = document.querySelectorAll("[data-dark]")

  let moon = 'fas fa-moon enlace icons icon-dark',
      sun = 'fas fa-sun enlace icons icon-dark'

  const lightMode = () => {
    $themeBtn.forEach(itemBtn => itemBtn.classList = moon)
    $selectors.forEach(item => item.classList.remove(classDark))
    ls.setItem("theme", "light")
  }

  const darkMode = () => {
    $themeBtn.forEach(itemBtn => itemBtn.classList = sun)
    $selectors.forEach(item => item.classList.add(classDark))
    ls.setItem("theme", "dark")
  }

  document.addEventListener('click', event => {

    if(event.target.classList[1] == 'fa-moon'){
      darkMode()
    } else if (event.target.classList[1] == 'fa-sun') {
      lightMode()
    }
  })

  document.addEventListener("DOMContentLoaded", e => {
    

    if(ls.getItem("theme") === null) ls.setItem("theme", "light");
    if(ls.getItem("theme") === "light") lightMode();
    if(ls.getItem("theme") === "dark") darkMode();
  })
}