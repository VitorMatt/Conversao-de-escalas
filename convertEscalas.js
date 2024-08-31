    let opcaoUm = document.getElementById('opcaoUm');
    let opcaoDois = document.getElementById('opcaoDois');
    let opcaoTres = document.getElementById('opcaoTres');
    let opcaoQuatro = document.getElementById('opcaoQuatro');
    let opcaoCinco = document.getElementById('opcaoCinco');
    let opcaoSeis = document.getElementById('opcaoSeis');
    let opcaoEscolhida = document.getElementById('opcaoEscolhida');
    let valorDigitado = document.getElementById('valorDigitado');
    let resultado = document.getElementById('resultado');
    let conversao;

    const form = document.getElementById('form');
    form.addEventListener('submit', (e)=> {

      e.preventDefault();
    });
    
    function converter() {

      
      switch (true){

        case opcaoEscolhida.value==opcaoUm.value:

          resultado.value = ((Number(valorDigitado.value) * 1.8) + 32).toFixed(2);
          resultado.innerHTML = 'Resultado: ' + resultado.value + '°F';
          break;
        case opcaoEscolhida.value==opcaoDois.value:

          resultado.value = ((Number(valorDigitado.value) - 32) / 1.8).toFixed(2);
          resultado.innerHTML = 'Resultado: ' + resultado.value + '°C';
          break;
        case opcaoEscolhida.value==opcaoTres.value:

          resultado.value = (Number(valorDigitado.value) + 273.15).toFixed(2);
          resultado.innerHTML = 'Resultado: ' + resultado.value + 'K';
          break;
        case opcaoEscolhida.value==opcaoQuatro.value:

          resultado.value = (Number(valorDigitado.value) - 273.15).toFixed(2);
          resultado.innerHTML = 'Resultado: ' + resultado.value + '°C';
          break;
        case opcaoEscolhida.value==opcaoCinco.value:

          conversao = (Number(valorDigitado.value) - 32) / 1.8;
          resultado.value = (conversao + 273.15).toFixed(2);
          resultado.innerHTML = 'Resultado: ' + resultado.value + 'K';
          break;
        default:

          conversao = Number(valorDigitado.value) - 273.15;
          resultado.value = ((conversao * 1.8) + 32).toFixed(2);
          resultado.innerHTML = 'Resultado: ' + resultado.value + '°F';
  };
};