const calcular = document.getElementById('calcular');

function imc () {
    const nombre = document.getElementById('nombre').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nombre !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abajo del peso.';
        }else if (valorIMC < 25) {
            classificacao = 'con el peso ideal. Felicitaciones!!!';
        }else if (valorIMC < 30){
            classificacao = 'levemente por en sima del peso.';
        }else if (valorIMC < 35){
            classificacao = 'con obesidad de grado I.';
        }else if (valorIMC < 40){
            classificacao = 'con obesidad de grado II';
        }else {
            classificacao = 'con obesidad de grado III. Cuidado!!';
        }

        resultado.textContent = `${nombre} su IMC es ${valorIMC} y usted esta ${classificacao}`;
        
    }else {
        resultado.textContent = 'Debe completar todos los campos!!!';
    }

}

calcular.addEventListener('click', imc);