const abrirMenu   = document.querySelector('.icon-abrirMenu');
const fecharMenu  = document.querySelector('.icon-fecharMenu');
const navLinks    = document.querySelector('.container-navLinks');
const navLinksA   = document.querySelectorAll('.navLink');
const widthMobile = window.matchMedia('(width: 440px)');

// Media query: 440px
if (widthMobile.matches){
    // Abri menu ao clicar no icon de menu hamburguer
    abrirMenu.addEventListener('click', ()=> {
        abrirMenu.style.display  = 'none';
        fecharMenu.style.display = 'block';
        navLinks.style.display   = 'block';
    })

    // Fecha menu ao clicar no icon de X
    fecharMenu.addEventListener('click', ()=> {
        abrirMenu.style.display  = 'block';
        fecharMenu.style.display = 'none';
        navLinks.style.display   = 'none';
    })

    // Adiciona evento de clique em todos os nav-links
    navLinksA.forEach(function(navlink){
        
        // Fecha menu (fecha após 3 décimos de segundos após clicar em algum nav-link)
        navlink.addEventListener('click', () => {
            setTimeout(() => {
                abrirMenu.style.display  = 'block';
                fecharMenu.style.display = 'none';
                navLinks.style.display   = 'none';
            }, 300);
        })
    })
};