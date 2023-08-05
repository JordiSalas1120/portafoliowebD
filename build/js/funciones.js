(function() {
    const galeriaSitio = document.querySelector('#galeria-sitios');
    const galeriaPracticasjs = document.querySelector('#galeria-jsmoderno');
    const galeriaReact = document.querySelector('#galeria-react');

    const botonDarkMode = document.querySelector('#checkbox');
    const menu = document.querySelector('#checke');
    const linksWs = [
        {"img":"sass","link": "https://festivaldemusica-rock-edm.netlify.app/", "style":"sass", "nombre":"Festival de Musica", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://frontendstore-proyecto.netlify.app/", "style":"css", "nombre":"Tienda de Camisetas", "tecno":"", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://jordifreelancer1.netlify.app/", "style":"css", "nombre":"Lading Page", "tecno":"", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://juego2d-en-js.netlify.app/", "style":"css", "nombre":"Juego en JS", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "#", "style":"sass", "nombre":"Reproductor de Video", "tecno":"", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://variables-css.netlify.app/", "style":"css", "nombre":"Variables de CSS", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://web-pug-leidy.netlify.app/", "style":"css", "nombre":"Web de Pug Parallax", "tecno":"", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://blog-de-recetas-de-cafe.netlify.app/", "style":"sass", "nombre":"Bog de Cafe", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://calculadora-jordi.netlify.app/", "style":"css", "nombre":"Calculadora", "tecno":"", "pwa": false, "maquetado":"html"},
        {"img":"sass","link": "https://carrito-localstorage-jsmoderm.netlify.app/", "style":"sass", "nombre":"Carrito Ecoomercer", "tecno":"js", "pwa": false, "maquetado":"html"},
    ]
    
    const linksjs = [
        {"img":"js","link": "https://buscador-de-recetas-js.netlify.app/", "style":"bootstrap", "nombre":"Buscadore de Recetas (API-REST)", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://app-de-clima-jsmoderm.netlify.app/", "style":"tailwind", "nombre":"App de Clima (API-REST)", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://crm-indexedb-js-moderm.netlify.app/", "style":"bootstrap", "nombre":"CRM", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://crm-indexedb-js-moderm.netlify.app/", "style":"tailwind", "nombre":"CRM", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://enviar-email-js.netlify.app/", "style":"bootstrap", "nombre":"Enviar Email", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://gasto-semanales.netlify.app/", "style":"tailwind", "nombre":"Gastos Semanales", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://pixaby-image.netlify.app/", "style":"bootstrap", "nombre":"Buscador de Imagen (API-REST)", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://cotizador-seguro-js-prototype.netlify.app/", "style":"tailwind", "nombre":"Cotizador de Seguro", "tecno":"js", "pwa": false, "maquetado":"html"},
        {"img":"js","link": "https://frondent-filtro-js.netlify.app/", "style":"bootstrap", "nombre":"Filtro de Autos", "tecno":"js", "pwa": false, "maquetado":"html"}
    ]
    const linksreact = [
        {"img":"react","link": "https://gilded-torrone-6c21b7.netlify.app/", "style":"tailwind", "nombre":"Seguimiento de Pacientes","tecno":"react", "pwa": false, "maquetado":"vite"},
        {"img":"react","link": "https://planificadora-de-gastos-react.netlify.app/", "style":"css", "nombre":"Planificador de Gastos","tecno":"react", "pwa": true, "maquetado":"vite"},
        {"img":"react","link": "https://calculadorade-interes.netlify.app/", "style":"tailwind", "nombre":"Calculadora de interes","tecno":"react", "pwa": false, "maquetado":"vite"},
        {"img":"react","link": "#", "nombre":"Administracion de Veterinarios", "style":"tailwind","tecno":"react", "pwa": false, "maquetado":"vite"},
        {"img":"react","link": "https://casa-de-oracion-tu-casa.netlify.app/", "nombre":"Casa de Oracion", "style":"tailwind","tecno":"react", "pwa": true, "maquetado":"vite"}
       
    ]    
        
    document.addEventListener('DOMContentLoaded',()=>{
        modoOscuro()
        crearGaleria(galeriaSitio, 10,linksWs)
        
        crearGaleria(galeriaPracticasjs, 9, linksjs)
        crearGaleria(galeriaReact, 5, linksreact)
       
        menu.addEventListener('click', ()=>{
            const enlaces = document.querySelectorAll("#enlaces")
            const tituloPortafolio = document.querySelector('.titulo-portafolio')
    
            enlaces.forEach(enlace =>{
                enlace.classList.toggle('menu-bar')
                tituloPortafolio.style.display ='none'
               
            })
        })
    })

    function crearGaleria(elemento, rango, links){
      
       
        for(let i = 1; i <= rango; i++){

            let c = i-1;
            let { img, link, nombre, style, tecno, pwa,maquetado } = links[c]
            console.log(nombre);
            const imagen = document.createElement('picture');
            imagen.classList.add('picture');
            imagen.innerHTML +=
            
            `<a href=${link} target="_blank"> 
                <div class="card_back ">
                    <p>${nombre}</p>
                    <p>Tecnologias:</p>
                    <div class="tecnologias">
                        
                        <div>${`<img class="tecnologias-${maquetado}" src="build/img/${maquetado}.webp"/>`}</div>

                        <div>${!pwa ?`<img class="tecnologias-${style}" src="build/img/${style}.webp"/>` : `<img class="tecnologias-pwa" src="build/img/pwa.webp"/>` }</div>

                        <div>${tecno ==='' ? '' :`<img class="tecnologias-${tecno}" src="build/img/${tecno}.webp"/>`}</div>
                        
                    </div>
                    
                    
                </div>

                <img class="imagen" id=${[i]}  loading="lazy" src="build/img/${img}-${i}.webp" alt="imagen de la galeria">
                
            </a>
            
            `;
            
            elemento.appendChild(imagen);
         
                
            
            
            
            
            
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
