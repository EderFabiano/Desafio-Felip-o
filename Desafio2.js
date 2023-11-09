// função
function saldoVitorias(vitorias, derrotas){
  var saldo = vitorias - derrotas;
  return saldo;
}

var vitorias = 100;
var derrotas = 5;

var saldoVitorias = saldoVitorias(vitorias, derrotas);

// Estrutura de decisão 
var nivel = "Ferro";
if (vitorias < 10) {
  nivel = "Ferro";
} else if (vitorias >= 11 && vitorias <= 20) {
  nivel = "Bronze";
} else if (vitorias >= 21 && vitorias <= 50) {
  nivel = "Prata";
} else if (vitorias >= 51 && vitorias <= 80) {
  nivel = "Ouro";
} else if (vitorias >= 81 && vitorias <= 90) {
  nivel = "Diamante";
} else if (vitorias >= 91 && vitorias <= 100) {
  nivel = "Lendário";
} else if (vitorias >= 101) {
  nivel = "Imortal";
}

// Saída
console.log("O Herói tem de saldo de "+saldoVitorias + " e está no nível de "+ nivel+ ".");
