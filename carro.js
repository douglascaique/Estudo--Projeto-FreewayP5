//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [5, 7, 3, 5, 6, 4];
let comprimentoCarro = 50;
let alturaCarro = 40;

// mostrar carros
function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

//movimento carro // valores de velocidade do carro

function movimentaCarro() {
  for (let c = 0; c < imagemCarros.length; c++) {
    xCarros[c] -= velocidadeCarros[c];
  }
}

function voltaPosicaoInicialDosCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouTodaATela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}

//codigos anteriores

// carro 1
// let xCarro = 600;
// let yCarro = 40;
// let velocidadeCarro = 5;

// carro 2
// let xCarro2 = 600;
// let yCarro2 = 96;
// let velocidadeCarro2 = 7;

// carro 3
// let xCarro3 = 600;
// let yCarro3 = 150;
// let velocidadeCarro3 = 9;
