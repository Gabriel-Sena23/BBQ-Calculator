const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")

function carnePP(duracao) {
  
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}

function cervejaPP(duracao) {
  
  if(duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
}

function bebidasPP(duracao) {
  
  if(duracao >= 6) {
    return 1500;
  }else{
    return 1000;
  }
}

function calcular() {
  const adultos = inputAdultos.value;
  const criancas = inputCriancas.value;
  const duracao = inputDuracao.value;

  const qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  const qdtTotalCerveja = cervejaPP(duracao) * adultos;
  const qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  //coloca-se o "+" após o sinal de "=" para deixar entendido que preciso imprimir mais de um innerHTML
  resultado.innerHTML = `<h2 class="result-info">You will need:</h2>`
  resultado.innerHTML += `
    <div class="result-block">
      <p>${qdtTotalCarne/1000} Kg of meet</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <p>${Math.ceil(qdtTotalCerveja/355)} Cans of beer</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <p>${Math.ceil(qdtTotalBebidas/2000)} Bottles of Coke</p>
    </div>
    
  `
}