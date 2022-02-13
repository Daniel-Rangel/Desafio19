const button = document.querySelector('.btn-js')
const namee = document.querySelector('.nome-js')
const email = document.querySelector('.email-js')

const itens = document.querySelectorAll('.item')

// click recebe 2 parametros um o evento e outro uma função
button.addEventListener('click', (e)=>{
    e.preventDefault() // impede o envio pelo form quando usado input type="button"
    
    const nameV = namee.value
    const emailV = email.value

    if( nameV === "" || emailV === ""){
        return console.log("Não tem valores")
    }
    
    console.log(nameV)
    itens.firstElementChild.textContent = nameV
    itens.children[1].textContent = emailV
})

