// CAPTURAR FORMULÁRIO

const form = document.querySelector('#formulario');

/** MONITORA O EVENTO DA PÁGINA E PREVINE O COMPORTAMENTO PADRÃO.
 *  LOGO DEPOIS RECEBE OS DADOS DO FORMULÁRIO E GUARDA NA MEMÓRIA. 
*/

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    /**
     * TRANSFORMA O RESULTADO EM NUMBER
     */
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    /**
     * A CONDICIONAL VERIFICA SE O PESO NÃO FOR VERDADEIRO DO QUE
     * FOI SETADO, RETORNA A MENSAGEM.
     */
    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResultado(msg, true);

});

function getNivelImc(imc) {
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';


    const p = criaP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}