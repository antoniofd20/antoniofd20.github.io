export default function scroll() {
  const $enlaces = document.querySelectorAll('.enlace')
  let altura = window.innerHeight,
      alto = window.innerHeight,
      ancho = window.innerWidth,
      resolucion = document.body.clientWidth

  let moon = 'fas fa-moon enlace icons icon-dark',
      sun = 'fas fa-sun enlace icons icon-dark'

  //console.log(alto)
  //console.log(ancho)
  
  /*window.addEventListener("scroll", () => {
    //console.log(window.scrollY)
    let color = '#bdbdbd';
    
    let $icono = document.querySelector('.icon-dark');

    if ($icono.classList == moon) color = 'black'
    else color = '#bdbdbd'

    if(window.scrollY >= altura - 60) $enlaces.forEach(el => el.style.color = color)
    else $enlaces.forEach(el => el.style.color = 'black')
  })*/

  // SI LA RESOLUCION DE LA PANTALLA ES MAYOR A 700 ENTONCES SI HACER EFECTO LATERAL
  if(resolucion > 1075){

    // multipliclar alto por numero de secciones verticales
    // multiplicar ancho por numero de secciones horizontales - 1
    /*alto = alto * 2
    ancho = ancho * 1
    scrollTotal = alto + ancho 

    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '#progress',
        scrub: 0.3,
        markers: false,
        start: 0,
        //end: 6222
        end: scrollTotal
      }
    })*/


    ScrollTrigger.defaults({
      //toggleActions: "restart pause resume pause"
      toggleActions: "restart pause"
    });

    // Main navigation 
    const panelsSection = document.querySelector("#panels");
    const panelsContainer = document.querySelector("#panels-container");
    document.querySelectorAll(".anchor").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const targetElem = document.querySelector(e.target.getAttribute("href"));
        if(targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          const containerOffset = panelsSection.offsetTop + targetElem.offsetLeft;

          gsap.to(window, {
            scrollTo: {
              y: containerOffset,
              autoKill: false
            },
            duration: 1
          });
        } else {
          gsap.to(window, {
            scrollTo: {
              y: targetElem,
              autoKill: false
            },
            duration: 1
          });
        }
      });
    });

    // Panels 
    const panels = gsap.utils.toArray("#panels-container .panel");
    gsap.to(panels, {
      xPercent: -100 * ( panels.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / ( panels.length - 1 ),
          duration: {min: 0.1, max: 0.1}
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth)
      }
    });
  }
}