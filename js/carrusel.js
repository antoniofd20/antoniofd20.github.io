// La funcion recibe el numero de cards que se tienen

export default function carrusel(cards) {
  const $carrusel = document.querySelector('.carrusel'),
        $cards = $carrusel.querySelectorAll('.card'),
        anchoCarrusel = $carrusel.scrollWidth,
        $btnAtras = $carrusel.querySelector('.atras'),
        $btnSiguiente = $carrusel.querySelector('.siguiente')

  let desplazamiento = (anchoCarrusel / cards), // 657.6
      mover = 0, card = 0

  if(screen.width > 900) desplazamiento = desplazamiento -130
  else if(screen.width > 700 && screen.width < 900) desplazamiento = desplazamiento -90
  else desplazamiento = desplazamiento - 40
  // console.log(screen.width)

  function reproducirVideo(tarjetaActiva) {
    tarjetaActiva.firstElementChild.style.display = 'block'
    tarjetaActiva.lastElementChild.style.display = 'none'
    tarjetaActiva.firstElementChild.play();
  }

  function mostrarImagen(tarjetaActiva) {
    tarjetaActiva.firstElementChild.style.display = 'none'
    tarjetaActiva.lastElementChild.style.display = 'block'
    tarjetaActiva.firstElementChild.currentTime = 0;
  }


  const videos = () => {
    let tarjetaActiva = $cards[card]
    tarjetaActiva.addEventListener('mouseover', () => reproducirVideo(tarjetaActiva))

    tarjetaActiva.addEventListener('mouseout', () => mostrarImagen(tarjetaActiva))
  }


  const ocultarBotones = () => {
    if(mover < 5) {
      $btnAtras.style.display = 'none'
      $btnSiguiente.style.display = 'flex'

    } else if(mover > 0 && mover != (desplazamiento * (cards-1))){
      $btnAtras.style.display = 'flex'
      $btnSiguiente.style.display = 'flex'

    }  else if(mover == (desplazamiento * (cards-1))) {
      $btnAtras.style.display = 'flex'
      $btnSiguiente.style.display = 'none'
    }
  }

  const activarCard = () => {
    // Quitar clase active a quien la tenga
    $cards.forEach(el => {
      el.classList.remove('active')

      el.removeEventListener('mouseover', () => reproducirVideo(el))
      el.removeEventListener('mouseout', () => mostrarImagen(el))
    })

    $cards[card].classList.add('active')
    videos();
  }

  ocultarBotones()
  activarCard()
  
  $btnSiguiente.onclick = () => {
    mover = mover + desplazamiento
    card++
    $carrusel.scroll(mover, 0)  
    ocultarBotones()
    activarCard()
    // console.log(mover )
  }
  
  $btnAtras.onclick = () => {
    mover = mover - desplazamiento
    card--
    $carrusel.scroll(mover, 0)  
    ocultarBotones()
    activarCard()
    // console.log(mover )
  }


}