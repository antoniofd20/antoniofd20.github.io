let loader = document.createElement("div"),
    textCargando = document.createTextNode("Cargando")
          
loader.className = "loader-sencillo"
loader.appendChild(textCargando)
document.body.appendChild(loader)



let cargando = document.querySelector(".loader-sencillo")
cargando.innerHTML = '<span>' + cargando.innerHTML.split("").join('</span><span>') + '</span>'

let tl = gsap.timeline()
tl.repeat(-1)

tl.to('.loader-sencillo span', {
  duration: .5,
  opacity: 1,
  rotate: 360,
  stagger: 0.1,
  background: 'rgb(150, 0, 0)'
})

const slideRight = () => {
  loader.style.left = `${0}vw`;
  let numero = 0;
  const slideUpEffect = setInterval(() => {
    if(loader.style.left !== "100vw"){
      numero += 1;
      loader.style.left = `${numero}vw`
    } else {
      clearInterval(slideUpEffect)
      loader.style.display = 'none';
    }
  }, 10)
}

const Retardo = segundos => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      let estado = document.readyState
      if (estado == 'complete') {
        setTimeout(() => {
          resolve();
        }, 2000)
      }
    }, segundos);
  })
}

const Ejecuta = async () => {
  try {
    await Retardo(500)
    slideRight()
  } catch (error) {
    console.error('Error: ', error )
  }
}

if(document.readyState == 'loading'){
    Ejecuta()
}
