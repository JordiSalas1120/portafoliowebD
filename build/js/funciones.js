(function() {
    const galeriaSitio = document.querySelector('#galeria-sitios');
    const galeriaPracticasjs = document.querySelector('#galeria-jsmoderno');

    const botonDarkMode = document.querySelector('#checkbox');
    const menu = document.querySelector('#checke');
    const linksWs = {
        1:"https://festivaldemusica-rock-edm.netlify.app/",
        2:"https://frontendstore-proyecto.netlify.app/",
        3:"https://jordifreelancer1.netlify.app/",
        4:"https://juego2d-en-js.netlify.app/",
        5:"https://youtube.com",
        6:"https://variables-css.netlify.app/",
        7:"https://web-pug-leidy.netlify.app/",
        8:"https://blog-de-recetas-de-cafe.netlify.app/",
        9:"https://calculadora-jordi.netlify.app/",
        10:"https://carrito-localstorage-jsmoderm.netlify.app/"
    } 
    const linksjs = {
        1:"https://buscador-de-recetas-js.netlify.app/",
        2:"https://app-de-clima-jsmoderm.netlify.app/",
        3:"https://crm-indexedb-js-moderm.netlify.app/",
        4:"https://crm-indexedb-js-moderm.netlify.app/",
        5:"https://enviar-email-js.netlify.app/",
        6:"https://gasto-semanales.netlify.app/",
        7:"https://pixaby-image.netlify.app/",
        8:"https://cotizador-seguro-js-prototype.netlify.app/",
        9:"https://frondent-filtro-js.netlify.app/"
    }
    document.addEventListener('DOMContentLoaded',()=>{
        crearGaleria(galeriaSitio, 13, "sitio",linksWs)
        crearGaleria(galeriaPracticasjs, 9, "practicasjs", linksjs)
        modoOscuro()
        menu.addEventListener('click', ()=>{
            const enlaces = document.querySelectorAll("#enlaces")
            const tituloPortafolio = document.querySelector('.titulo-portafolio')
    
            enlaces.forEach(enlace =>{
                enlace.classList.toggle('menu-bar')
                tituloPortafolio.style.display ='none'
               
            })
        })
    })

    function crearGaleria(elemento, rango,name, links){
        
        var l = 0;
        for(let i = 1; i <= rango; i++){

            let link = Object.values(links);
            const imagen = document.createElement('picture');
            imagen.classList.add('picture');
            imagen.innerHTML =
            
            `<a href=${link[l]} target="_blank"> 
                <div class="card_back ">
                    <div><img class="tecnologias" src="build/img/html.webp"/></div>
                    <div><img class="tecnologias-css" src="build/img/css.webp"/></div>
                    <div>${name ==='practicasjs' ? '<img class="tecnologias" src="build/img/js.webp"/>' : '<img class="tecnologias-sass" src="build/img/sass.webp"/>'}</div>

                </div>
                <img class="imagen" id=${[i]}  loading="lazy" src="build/img/${name}-${i}.webp" alt="imagen de la galeria">
                
            </a>
            
            `;
            console.log(imagen);
            elemento.appendChild(imagen);
            
            
            l = l + 1; 
        }   
    }

    function modoOscuro(){
        const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');


        if(prefiereDarkMode.matches) {
            document.body.classList.add('dark-mode');
            
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
    botonDarkMode.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
)();
