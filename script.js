const pessoa = {
    primeroNome : "Daniel",
    ultimoNome : "Rangel",
    idade : 32,
    hobbies: ["Estudar", "anime", "jogar"] 
}

/* /* lista 
for(p of pessoa.hobbies){

    console.log(p)
}
 */
/* 
const hobbi = pessoa.hobbies.filter((i)=>{
    return i === "jogar"
})

console.log(hobbi) */


const {primeroNome : nome1 , ultimoNome, idade, hobbies} = pessoa

pessoa.cachorro = "Roy"

