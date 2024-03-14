const botao = document.querySelector('#modo-escuro')
const elemento = document.querySelector('body')
const estrategia = document.querySelector('#estrategia');
const nossoProjeto = document.querySelector('#nossoProjeto');
const solucoes = document.querySelector('#solucoes');
const bottonForm = document.querySelector('#botton-form');
const footer = document.querySelector('#footer');
const onu = document.querySelector('#logoOnu');
const logoFooter = document.querySelector('#logoFooter');

botao.addEventListener('click', () => {
    const modo = botao.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
    if(modo == 'dark'){
        estrategia.classList.remove('section-green');
        estrategia.classList.add('section-dark');
        nossoProjeto.classList.remove('section-green2');
        nossoProjeto.classList.add('section-dark2');
        solucoes.classList.remove('section-green');
        solucoes.classList.add('section-dark');
        // bottonForm.style.backgroundColor = "#212529"
        footer.style.backgroundColor = "var(--verde-escuro)"
        onu.src = "assets/onu_logo.png"
        logoFooter.src = "assets/AskyuLogoPreto.png"
    } else{
        estrategia.classList.remove('section-dark');
        estrategia.classList.add('section-green');
        nossoProjeto.classList.remove('section-dark2');
        nossoProjeto.classList.add('section-green2');
        solucoes.classList.remove('section-dark');
        solucoes.classList.add('section-green');
        // bottonForm.style.backgroundColor = "white"
        footer.style.backgroundColor = "var(--verde-claro)"
        onu.src = "assets/onu_logo_dark.png"
        logoFooter.src = "assets/AskyuLogoBranco.png"
    }
})