function verificaSeOChutePossuiUmValorValido(chute) {
    const valor = +chute;

    if (isNaN(valor)) {
        elementoChute.innerHTML += '<div>Chute inválido!</div>';
    }

    if (numeroForMaiorOuMenorQueOPermitido(valor)) {
        elementoChute.innerHTML += `<div>Chute inválido: Chute precisa estar entre ${menorValor} e ${maiorValor}</div>`;
    }

    if (numeroAleatorio > valor) {
        elementoChute.innerHTML += `   
            <div>O número secreto é maior <i class="fa-solid fa-solid fa-arrow-up"></i></div>
        `;
    }
    else if (numeroAleatorio < valor) {
        elementoChute.innerHTML += `   
            <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `;
    }
    else if (numeroAleatorio === valor) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>

            <button id='botao' class='btn-jogar'>Jogar novamente</button>
        `;
    }
}

function numeroForMaiorOuMenorQueOPermitido(valor) {
    return valor > maiorValor || valor < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'botao'){
        window.location.reload();
    }
});