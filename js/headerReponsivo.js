const abrirMenu   = document.querySelector('.icon-abrirMenu');
const fecharMenu  = document.querySelector('.icon-fecharMenu');
const navLinks    = document.querySelector('.container-navLinks');
const navLinksA   = document.querySelectorAll('.navLink');
const widthMobile = window.matchMedia('(width: 440px)');

// Abrir menu
abrirMenu.addEventListener('click', ()=> {
    abrirMenu.style.display  = 'none';
    fecharMenu.style.display = 'block';
    navLinks.style.display   = 'block';
})

// Media query: 440px
if (widthMobile.matches){
    navLinksA.forEach(function(navlink){
        
        // Fechar menu
        navlink.addEventListener('click', () => {
            setTimeout(() => {
                abrirMenu.style.display  = 'block';
                fecharMenu.style.display = 'none';
                navLinks.style.display   = 'none';
            }, 300);
        })
    })
};