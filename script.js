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
    const converterAltura = altura / 100
    
    const IMC =   peso / (converterAltura * converterAltura) 
    
    if(IMC < 16){
       return 'Magreza grave' + ' ' + IMC.toFixed(2)
    }

    if(IMC <= 16 || IMC < 17){
        return 'Magreza moderada' + ' ' + IMC.toFixed(2)
    }

    if(IMC <= 17 || IMC < 18.5){
        return 'Magreza Leve' + ' ' + IMC.toFixed(2)
    }

    if(IMC <= 18.5 || IMC < 25){
        return 'Saudável' + ' ' + IMC.toFixed(2)
    }

    if(IMC <= 25 || IMC < 30){
        return 'Sobrepeso' + ' ' + IMC.toFixed(2)
    }

    if(IMC <= 30 || IMC < 35){
        return 'Obesidade Grau I' + ' ' + IMC.toFixed(2)
    }

    if(IMC <= 35 || IMC < 40){
        return 'Obesidade Grau II' + ' ' + IMC.toFixed(2)
    }

    if(IMC >= 40){
        return 'Obesidade Grau III' + ' ' + IMC.toFixed(2)
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


