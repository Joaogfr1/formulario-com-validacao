const Inputs = document.querySelectorAll(".seletor")
const botao = document.getElementById('validacao')
const erros = document.querySelectorAll(".erro")



Inputs.forEach(caixa=>{

    caixa.addEventListener('change', () =>{
        if(caixa.value !==""){
            caixa.classList.add("regular")
        }else{
            caixa.classList.remove("regular")
        }
    })
})

botao.addEventListener('click', (event) =>{
    event.preventDefault()

    Inputs.forEach((input, index)=>{
        if(input.value.trim() ===""){
            erros[index].style.display= 'block';
            input.classList.add('irregular');
        }else{
            erros[index].style.display = 'none';
            input.classList.remove('irregular');
        }
    })
})
