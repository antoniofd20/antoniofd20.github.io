let $divLoader = document.createElement("div")
$divLoader.id = 'loader'
$divLoader.className = 'loader'

// Agregar div al documento
document.body.appendChild($divLoader)

// Crear imagen
let $img = new Image()
$img.src = "../img/parallax01.png"
$img.className = "loader-img"

$divLoader.appendChild($img)

// Crear lista
let $ul = document.createElement("ul"),
    // // LETRA C
    // $li1 = document.createElement("li"),
    // li1Texto = document.createTextNode("C"),
    // // LETRA A
    // $li2 = document.createElement("li"),
    // li2Texto = document.createTextNode("A"),
    // // LETRA R
    // $li3 = document.createElement("li"),
    // li3Texto = document.createTextNode("R"),
    // // LETRA G
    // $li4 = document.createElement("li"),
    // li4Texto = document.createTextNode("G"),
    // // LETRA A
    // $li5 = document.createElement("li"),
    // li5Texto = document.createTextNode("A"),
    // // LETRA N
    // $li6 = document.createElement("li"),
    // li6Texto = document.createTextNode("N"),
    // // LETRA D
    // $li7 = document.createElement("li"),
    // li7Texto = document.createTextNode("D"),
    // // LETRA O
    // $li8 = document.createElement("li"),
    // li8Texto = document.createTextNode("O")


    // ulcontent = `<li>C</li>
    //              <li>A</li>
    //              <li>R</li>
    //              <li>G</li>
    //              <li>A</li>
    //              <li>N</li>
    //              <li>D</li>
    //              <li>O</li>`

    text = 'CARGANDO',
    arrayText = text.split(""),
    $fragment = document.createDocumentFragment()

    arrayText.forEach(el => {
      const $li = document.createElement("li")
      $li.textContent = el
      $fragment.appendChild($li)
    })

// $li1.appendChild(li1Texto);
// $li2.appendChild(li2Texto);
// $li3.appendChild(li3Texto);
// $li4.appendChild(li4Texto);
// $li5.appendChild(li5Texto);
// $li6.appendChild(li6Texto);
// $li7.appendChild(li7Texto);
// $li8.appendChild(li8Texto);

// $ul.appendChild($li1);
// $ul.appendChild($li2);
// $ul.appendChild($li3);
// $ul.appendChild($li4);
// $ul.appendChild($li5);
// $ul.appendChild($li6);
// $ul.appendChild($li7);
// $ul.appendChild($li8);

$ul.className = "loading-list"
// $ul.innerHTML = ulcontent
$ul.appendChild($fragment)


$divLoader.appendChild($ul)

// Agregar div al documento
// document.body.appendChild(divLoader)


// SIMULAR RETARDO 
// const Retardo = segundos => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           // alert(`Ya han pasado ${segundos / 1000} segundos`)
//             if(document.readyState == 'complete'){
//                 resolve();
//             }
//         }, segundos);
//     })
// }

// OCULTAR INMEDIATO
const OcultarLoader = () => {
  // let divLoader = document.getElementById("loader")

  $divLoader.style.display = "none"
}

// OCULTAR FADEOUT
const fadeOut = () => {
  // let loader = document.getElementById("loader")
      
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

const slideUp = () => {
  $divLoader.style.top = `${0}vh`;
  // console.log(divLoader.style.top)
  // divLoader.style.height = 0 + "px"
  let numero = 0;
  const slideUpEffect = setInterval(() => {
    // console.log(divLoader.style.top)
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
    // setTimeout(() => {
    //     // alert(`Ya han pasado ${segundos / 1000} segundos`)
    //       if(document.readyState == 'complete'){
    //           resolve();
    //       }
    //   }, segundos);
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

if(document.readyState == 'loading'){
    // Retardo(1000).then(() => slideUp())
    //              .catch(() => console.log("Error"))
    Ejecuta()
}

// Retardo(3000);

// $(document).loading(function(){

// })