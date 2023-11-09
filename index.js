//Variáveis
var nome="Abner";
var qtdExp=100000;
var nivel;

//Estrutura de decisão
if(qtdExp <=1000){
  nivel = "Ferro";
}else if(qtdExp >1000 && qtdExp<=2000){
  nivel = "Bronze";
}else if (qtdExp >2000 && qtdExp<=6000){
  nivel = "Prata";
}else if (qtdExp >6000 && qtdExp<=7000){
  nivel="Ouro";
}else if (qtdExp>7000 && qtdExp<=8000){
  nivel = "Platina";
}else if (qtdExp >8000 && qtdExp <=9000){
  nivel="Ascendente";
}else if(qtdExp >9000 && qtdExp<=10000){
  nivel="Imortal";
}else{
  nivel="Radiante"; 
}
//Saida  
console.log("O Herói de nome " +nome+ " está no nível de "+nivel);
