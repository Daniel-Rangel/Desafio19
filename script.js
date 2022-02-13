const nameImput = document.querySelector('.nome-js')
const emailImput = document.querySelector('.email-js')
const btnImput = document.querySelector('.btn-js')
// const myForm = document.querySelector('.myForm')
const erroMensagem = document.querySelector('.msgErro')
const itens = document.querySelector('.itens')

btnImput.addEventListener('click', (e)=>{
    e.preventDefault()

    const nameValue = nameImput.value
    const emailValue = emailImput.value

    if(nameValue === '' || emailValue === ''){
        erroMensagem.innerText = "Prencha os campos abaixo"

        setTimeout(()=>{
            erroMensagem.innerText = ''
        },3000 )
        return;
    }

    if(nameValue !== '' || emailValue !== ''){
        const li = document.createElement('li')

        li.classList = 'item'
        li.innerHTML = `Nome: ${nameValue},<br/> Email: ${emailValue}`
        itens.appendChild(li)

        nameImput.value = ''
        emailImput.value  = ''
    }
})