/* const nameImput = document.querySelector('.nome-js')
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
 */

/* CALCULO IMC */
const form = document.querySelector('.IMC_calc form')
const alturaInput = document.querySelector('.altura-js')
const pesoInput = document.querySelector('.peso-js')
const calcBtn = document.querySelector('button.calc_btn')
const resposta = document.querySelector('.resposta-js')



/* calculo */
const calculoIMC = (altura , peso)=> {
    const calculo =   peso / (altura * altura) 
    
    if(calculo < 16){
       return 'Magreza grave' + ' ' + calculo.toFixed(2)
    }

    if(calculo <= 16 || calculo < 17){
        return 'Magreza moderada' + ' ' + calculo.toFixed(2)
    }

    if(calculo <= 17 || calculo < 18.5){
        return 'Magreza Leve' + ' ' + calculo.toFixed(2)
    }

    if(calculo <= 18.5 || calculo < 25){
        return 'Saudável' + ' ' + calculo.toFixed(2)
    }

    if(calculo <= 25 || calculo < 30){
        return 'Sobrepeso' + ' ' + calculo.toFixed(2)
    }

    if(calculo <= 30 || calculo < 35){
        return 'Obesidade Grau I' + ' ' + calculo.toFixed(2)
    }

    if(calculo <= 35 || calculo < 40){
        return 'Obesidade Grau II' + ' ' + calculo.toFixed(2)
    }

    if(calculo >= 40){
        return 'Obesidade Grau III' + ' ' + calculo.toFixed(2)
    }
    
}


calcBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    const altura = alturaInput.value.replace(',','.')
    const peso = pesoInput.value

    if(altura === '' || peso === ''){
        resposta.innerText = 'Preencha os campos acima'
        resposta.style.color = 'red'
    }

    resposta.innerHTML = ` ${calculoIMC(altura,peso)}`
})


