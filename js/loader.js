// Function to add loader

let $divLoader = document.createElement("div")

$divLoader.id = 'loader'
$divLoader.className = 'loader'

// Add div to document
document.body.appendChild($divLoader)

// Create image
let $img = new Image()
$img.src = "./img/ray_flores.png"
$img.className = "loader-img"

$divLoader.appendChild($img)

// Create list
let $ul = document.createElement("ul"),
    text = 'LOADING',
    arrayText = text.split(""),
    $fragment = document.createDocumentFragment()

    arrayText.forEach(el => {
      const $li = document.createElement("li")
      $li.textContent = el
      $fragment.appendChild($li)
    })

$ul.className = "loading-list"
$ul.appendChild($fragment)

$divLoader.appendChild($ul)


// Hidden
const OcultarLoader = () => $divLoader.style.display = "none";

// Fadeout 
const fadeOut = () => {
      
  const fadeEffect = setInterval(function () {
    if (!$divLoader.style.opacity) {
        $divLoader.style.opacity = 1;
        $divLoader.style.display = 'block';
    }
    if ($divLoader.style.opacity > 0) {
        $divLoader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
        $divLoader.style.display = 'none';
    }
  }, 2000);

  
}

// Slide up
const slideUp = () => {
  let numero = 0;
  $divLoader.style.top = `${0}vh`;

  const slideUpEffect = setInterval(() => {
    if($divLoader.style.top !== "-100vh"){
      numero -= 1;
      $divLoader.style.top = `${numero}vh`
    } else {
      clearInterval(slideUpEffect)
      $divLoader.style.display = 'none';
    }
  }, 10)
}

const Retardo = segundos => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let estado = document.readyState
      if (estado == 'complete') {
        resolve();
      }
    }, segundos);
  })
}

const Ejecuta = async () => {
  try {
    await Retardo(500)
    slideUp()
  } catch (error) {
    console.error('Error: ', error )
  }
}

// While the document is loading 
if(document.readyState == 'loading'){
    Ejecuta()
}
