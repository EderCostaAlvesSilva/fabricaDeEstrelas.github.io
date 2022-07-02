const numero = document.getElementById('numero');

const btn = document.getElementById('btn');

const saida = document.getElementById('saida');

function criar(){
    let quant = numero.value;
    let estrela = '';

    for(index = 1; index <= quant; index++){

        for(x = 1; x <= index; x++){
            estrela += '*'
        }

        estrela += '\n';
    }
    saida.textContent = estrela;
}

btn.addEventListener('click', criar)