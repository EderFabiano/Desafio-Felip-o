//Variáveis
var nome="Abner";
var QtdExp=100000;
var nivel;

//Estrutura de decisão
if(QtdExp <=1000){
  nivel = "Ferro";
}else if(QtdExp >1000 && QtdExp<=2000){
  nivel = "Bronze";
}else if (QtdExp >2000 && QtdExp<=6000){
  nivel = "Prata";
}else if (QtdExp >6000 && QtdExp<=7000){
  nivel="Ouro";
}else if (QtdExp>7000 && QtdExp<=8000){
  nivel = "Platina";
}else if (QtdExp >8000 && QtdExp <=9000){
  nivel="Ascendente";
}else if(QtdExp >9000 && QtdExp<=10000){
  nivel="Imortal";
}else{
  nivel="Radiante"; 
}
//Saida  
console.log("O Herói de nome " +nome+ " está no nível de "+nivel);
