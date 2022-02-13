const menuHamburguer = document.querySelector('.menuHamburguer-js')
const menu =document.querySelector('.menu')

console.log(menuHamburguer)


menuHamburguer.addEventListener('click', () => {
    menuHamburguer.classList.toggle('ativo')

    menu.classList.toggle('menuAtivo')

    console.log(menuHamburguer)
})