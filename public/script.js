const botao = document.querySelector('#modo-escuro')
const elemento = document.querySelector('body')

botao.addEventListener('click', () => {
    const modo = botao.checked ? 'dark' : 'light'
    elemento.setAttribute('data-bs-theme', modo)
})