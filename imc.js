const nome = document.getElementById('nome')
const altura = document.getElementById('altura')
const peso = document.getElementById('peso')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== '') {
        
        const valorIMC = (peso/(altura * altura)).toFixed(2);
        resultado.textContent = `${nome}, seu IMC é de ${valorIMC}`
    }
    else {
        resultado.textContent = 'Preencha os campos!'
    }

}


calcular.addEventListener('click', imc);