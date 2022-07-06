let mes = prompt ("Ingrese su mes de nacimiento (1-12)1= Enero 2=Febrero 3=Marzo 4=Abril 5=Mayo 6=Junio 7=Julio 8=Agosto 9=Septiembre 10=Octubre 11=Noviembre 12= Diciembre");
let dia = prompt("Ingrese dia de nacimiento (1-31)");
let mes2 = prompt("Ahora ingrese otro mes de nacimiento");
let dia2 = prompt("Ingrese otro dia de nacimiento");

// Inicio - variables en el primer par de digitos 

if((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)){
    alert("Tu signo es Aries")
}else if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)){
    alert("Tu signo es Tauro")
}else if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)){
    alert("Tu signo es Géminis")
}else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)){
    alert("Tu signo es Cáncer")
}else if ((dia >= 23 && mes == 7) || (dia <= 22 && mes == 8)){
    alert("Tu signo es Leo")
}else if ((dia >= 23 && mes == 8) || (dia <= 22 && mes == 9)){
    alert("Tu signo es Virgo")
}else if ((dia >= 23 && mes == 9) || (dia <= 22 && mes == 10)){
    alert("Tu signo es Libra")
}else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)){
    alert("Tu signo es Escorpio")
}else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)){
    alert("Tu signo es Sagitario")
}else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)){
    alert("Tu signo es Capricornio")
}else if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)){
    alert("Tu signo es Acuario")
}else if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)){
    alert("Tu signo es Piscis")
}

//Fin - Variables del primer par de digitos

// Variables - segundo par de digitos 

if((dia2 >= 21 && mes2 == 3) || (dia2 <= 20 && mes2 == 4)){
    alert("Tu signo es Aries")
}else if ((dia2 >= 21 && mes2 == 4) || (dia2 <=21 && mes2 == 5)){
    alert("Tu signo es Tauro")
}else if ((dia2 >= 22 && mes2 == 5) || (dia2 <=21 && mes2 == 6)){
    alert("Tu signo es Géminis")
}else if ((dia2 >= 22 && mes2 == 6) || (dia2 <= 22 && mes2 == 7)){
    alert("Tu signo es Cáncer")
}else if ((dia2 >= 23 && mes2 == 7) || (dia2 <= 22 && mes2 == 8)){
    alert("Tu signo es Leo")
}else if ((dia2 >= 23 && mes2 == 8) || (dia2 <= 22 && mes2 == 9)){
    alert("Tu signo es Virgo")
}else if ((dia2 >= 23 && mes2 == 9) || (dia2 <= 22 && mes2 == 10)){
    alert("Tu signo es Libra")
}else if ((dia2 >= 23 && mes2 == 10) || (dia2 <= 22 && mes2 == 11)){
    alert("Tu signo es Escorpio")
}else if ((dia2 >= 23 && mes2 == 11) || (dia2 <= 21 && mes2 == 12)){
    alert("Tu signo es Sagitario")
}else if ((dia2 >= 22 && mes2 == 12) || (dia2 <= 20 && mes2 == 1)){
    alert("Tu signo es Capricornio")
}else if ((dia2 >= 21 && mes2 == 1) || (dia2 <= 19 && mes2 == 2)){
    alert("Tu signo es Acuario")
}else if ((dia2 >= 20 && mes2 == 2) || (dia2 <= 20 && mes2 == 3)){
    alert("Tu signo es Piscis")
}

//Fin - Variables del segundo par de digitos 

// Inicio del cuadro de compatibilidad 

//Inicio de Geminis
//Géminis y Geminis

if(dia >= 22 && mes == 5 && dia2 >= 22 && mes2 == 05){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <=21 && mes2 == 06){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <=21 && mes2 == 06){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 22 && mes2 == 05){
    alert("Son compatibles")
}

//Géminis y Géminis

//Géminis y Piscis

if(dia >= 22 && mes == 5 && dia2 >= 20 && mes2 == 2){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 20 && mes2 == 3){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 20 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 20 && mes2 == 2){
    alert("No son compatibles")
}

//Géminis y Piscis

//Géminis y Escorpio

if(dia >= 22 && mes == 5 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}

//Géminis y Escorpio

//Geminis y Tauro

if(dia >= 22 && mes == 5 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}

//Géminis y Tauro

//Géminis y Libra

if(dia >= 22 && mes == 5 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}

//Géminis y Libra

//Géminis y Cáncer

if(dia >= 22 && mes == 5 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}

//Géminis y Cáncer

//Géminis y Sagitario

if(dia >= 22 && mes == 5 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}

//Géminis y Sagitario

//Géminis y Leo

if(dia >= 22 && mes == 5 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}

//Géminis y Leo

//Géminis y Acuario

if(dia >= 22 && mes == 5 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}

//Géminis y Acuario

//Géminis y Aries

if(dia >= 22 && mes == 5 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}

//Géminis y Aries

//Géminis y Virgo

if(dia >= 22 && mes == 5 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia <= 22 && mes == 9){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 5  && dia <= 22 && mes == 9){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}

//Géminis y Virgo

//Géminis y Capricornio

if(dia >= 22 && mes == 5 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 5  && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 6 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}

//Gèminis y Capricornio
//Fin de Geminis

//Inicio de Piscis
//Piscis y Géminis

if(dia >= 20 && mes == 2 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}

//Piscis y Géminis

//Piscis y Piscis

if(dia >= 20 && mes == 2 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}

//Piscis y Piscis

//Piscis y Escorpio

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}

//Piscis y Escorpio

//Piscis y Tauro

if(dia >= 20 && mes == 2 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}

//Piscis y Tauro

//Piscis y Libra

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 9){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 22 && mes2 == 10){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 10){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 23 && mes2 == 9){
    alert("Son intermedios")
}

//Piscis y Libra

//Piscis y Cáncer

if(dia >= 20 && mes == 2 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 &&dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}

//Piscis y Cáncer

//Piscis y Sagitario

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 11){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 21 && mes2 == 12){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 21 && mes2 == 12){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 23 && mes2 == 11){
    alert("Son intermedios")
}

//Piscis y Sagitario

//Piscis y Leo

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}

//Piscis y Leo

//Piscis y Acuario

if(dia >= 20 && mes == 2 && dia2 >= 21 && mes2 == 1){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 19 && mes2 == 2){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 19 && mes2 == 2){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 21 && mes2 == 1){
    alert("Son intermedios")
}

//Piscis y Acuario

//Piscis y Aries

if(dia >= 20 && mes == 2 && dia2 >= 21 && mes2 == 3){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 20 && mes2 == 4){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 20 && mes2 == 4){
    alert("Son intermedios")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 21 && mes2 == 3){
    alert("Son intermedios")
}

//Piscis y Aries

//Piscis y Virgo

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}

//Piscis y Virgo

//Piscis y Capricornio

if(dia >= 20 && mes == 2 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 20 && mes2 == 3 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}

//Piscis y Capricornio
//FIn de Piscis

//Inicio de Escorpio
//Escorpio y Géminis

if(dia >= 23 && mes == 10 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}

//Escorpio y Géminis

//Escorpio y Piscis

if(dia >= 23 && mes == 10 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}

//Escorpio y Piscis

//Escorpio y Escorpio

if(dia >= 23 && mes == 10 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}

//Escorpio y Escorpio

//Escorpio y Tauro

if(dia >= 23 && mes == 10 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}

//Escorpio y Tauro

//Escorpio y Libra

if(dia >= 23 && mes == 10 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}

//Escorpio y Libra

//Escorpio y Cáncer

if(dia >= 23 && mes == 10 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}

//Escorpio y Cáncer

//Escorpio y Sagitario

if(dia >= 23 && mes == 10 && dia2 >= 23 && mes2 == 11){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 11 && dia2 <= 21 && mes2 == 12){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 10 && dia2 <= 21 && mes2 == 12){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 11 && dia2 >= 23 && mes2 == 11){
    alert("Son intermedios")
}

//Escorpio y Sagitario

//Escorpio y Leo

if(dia >= 23 && mes == 10 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 11 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 10 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 11 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}

//Escorpio y Leo

//Escorpio y Acuario

if(dia >= 23 && mes == 10 && dia2 >= 21 && mes2 == 1){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 11 && dia2 <= 19 && mes2 == 2){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 10 && dia2 <= 19 && mes2 == 2){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 11 && dia2 >= 21 && mes2 == 1){
    alert("Son intermedios")
}

//Escorpio y Acuario

//Escorpio y Aries

if(dia >= 23 && mes == 10 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}

//Escorpio y Aries

//Escorpio y Virgo

if(dia >= 23 && mes == 10 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}

//Escorpio y Virgo

//Escorpio y Capricornio

if(dia >= 23 && mes == 10 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 10 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 11 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}

//Escorpio y Capricornio
//FIn de Escorpio

//Inicio de Tauro
//Tauro y Géminis

if(dia >= 21 && mes == 4 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}

//Tauro y Géminis

//Tauro y Piscis

if(dia >= 21 && mes == 4 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}

//Tauro y Piscis

//Tauro y Escorpio

if(dia >= 21 && mes == 4 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}

//Tauro y Escorpio

//Tauro y Tauro

if(dia >= 21 && mes == 4 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}

//Tauro y Tauro

//Tauro y Libra

if(dia >= 21 && mes == 4 && dia2 >= 23 && mes2 == 9){
    alert("Son intermedios")
}else if(dia <= 21 && mes == 5 && dia2 <= 22 && mes2 == 10){
    alert("Son intermedios")
}else if(dia >= 21 && mes == 4 && dia2 <= 22 && mes2 == 10){
    alert("Son intermedios")
}else if(dia <= 21 && mes == 5 && dia2 >= 23 && mes2 == 9){
    alert("Son intermedios")
}

//Tauro y Libra

//Tauro y Cáncer

if(dia >= 21 && mes == 4 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}

//Tauro y Cáncer

//Tauro y Sagitario

if(dia >= 21 && mes == 4 && dia2 >= 23 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 21 && mes2 == 12){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 21 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 23 && mes2 == 11){
    alert("No son compatibles")
}

//Tauro y Sagitario

//Tauro y Leo

if(dia >= 21 && mes == 4 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}else if(dia <= 21 && mes == 5 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia >= 21 && mes == 4 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia <= 21 && mes == 5 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}

//Tauro y Leo

//Tauro y Acuario

if(dia >= 21 && mes == 4 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 19 && mes2 == 2){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 19 && mes2 == 2){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}

//Tauro y Acuario

//Tauro y Aries

if(dia >= 21 && mes == 4 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}

//Tauro y Aries

//Tauro y Virgo

if(dia >= 21 && mes == 4 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}

//Tauro y Virgo

//Tauro y Capricornio

if(dia >= 21 && mes == 4 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 4 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 5 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}

//Tauro y Capricornio
//Fin de Tauro

//Inicio de Libra
//Libra y Geminis

if(dia >= 23 && mes == 9 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}

//Libra y Géminis

//Libra y Piscis

if(dia >= 23 && mes == 9 && dia2 >= 20 && mes2 == 2){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 20 && mes2 == 3){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 20 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 20 && mes2 == 2){
    alert("No son compatibles")
}

//Libra y Piscis

//Libra y Escorpio

if(dia >= 23 && mes == 9 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}

//Libra y Escorpio

//Libra y Tauro

if(dia >= 23 && mes == 9 && dia2 >= 21 && mes2 == 4){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 10 && dia2 <=21 && mes2 == 5){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 9  && dia2 <=21 && mes2 == 5){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 10 && dia2 >= 21 && mes2 == 4){
    alert("Son intermedios")
}

//Libra y Tauro

//Libra y Libra

if(dia >= 23 && mes == 9 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}

//Libra y Libra

//Libra y Cáncer

if(dia >= 23 && mes == 9 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}

//Libra y Cáncer

//Libra y Sagitario

if(dia >= 23 && mes == 9 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}

//Libra y Sagitario

//Libra y Leo

if(dia >= 23 && mes == 9 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}

//Libra y Leo

//Libra y Acuario

if(dia >= 23 && mes == 9 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}

//Libra y Acuario

//Libra y Aries

if(dia >= 23 && mes == 9 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}

//Libra y Aries

//Libra y Virgo

if(dia >= 23 && mes == 9 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 <= 22 && mes2 == 9){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 9  && dia2 <= 22 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 10 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}

//Libra y Virgo

//Libra y Capricornio

if(dia >= 23 && mes == 9 && dia2 >= 22 && mes2 == 12){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 10 && dia2 <= 20 && mes2 == 1){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 9  && dia2 <= 20 && mes2 == 1){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 10 && dia2 >= 22 && mes2 == 12){
    alert("Son intermedios")
}

//Libra y Capricornio
//Fin de Libra

//Inicio de Cáncer
//Cámcer y Géminis

if(dia >= 22 && mes == 6 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <=21 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 22 && mes2 == 5){
    alert("No son compatibles")
}

//Cáncer y Géminis

//Cámcer y Piscis

if(dia >= 22 && mes == 6 && dia >= 20 && mes == 2){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia >= 20 && mes == 2){
    alert("Son compatibles")
}

//Cáncer y Piscis

//Cámcer y Escorpio

if(dia >= 22 && mes == 6 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}

//Cáncer y Escorpio

//Cámcer y Tauro

if(dia >= 22 && mes == 6 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}

//Cáncer y Tauro

//Cámcer y Libra

if(dia >= 22 && mes == 6 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}

//Cáncer y Libra

//Cámcer y Cáncer

if(dia >= 22 && mes == 6 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}

//Cáncer y Cáncer

//Cámcer y Sagitario

if(dia >= 22 && mes == 6 && dia2 >= 23 && mes2 == 11){
    alert("Son imtermedios")
}else if(dia <= 22 && mes == 7 && dia2 <= 21 && mes2 == 12){
    alert("Son imtermedios")
}else if(dia >= 22 && mes == 6 && dia2 <= 21 && mes2 == 12){
    alert("Son imtermedios")
}else if(dia <= 22 && mes == 7 && dia2 >= 23 && mes2 == 11){
    alert("Son imtermedios")
}

//Cáncer y Sagitario

//Cámcer y Leo

if(dia >= 22 && mes == 6 && dia2 >= 23 && mes2 == 7){
    alert("Son imtermedios")
}else if(dia <= 22 && mes == 7 && dia2 <= 22 && mes2 == 8){
    alert("Son imtermedios")
}else if(dia >= 22 && mes == 6 && dia2 <= 22 && mes2 == 8){
    alert("Son imtermedios")
}else if(dia <= 22 && mes == 7 && dia2 >= 23 && mes2 == 7){
    alert("Son imtermedios")
}

//Cáncer y Leo

//Cámcer y Acuario

if(dia >= 22 && mes == 6 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 19 && mes2 == 2){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 19 && mes2 == 2){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}

//Cáncer y Acuario

//Cámcer y Aries

if(dia >= 22 && mes == 6 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}

//Cáncer y Aries

//Cámcer y Virgo

if(dia >= 22 && mes == 6 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}

//Cáncer y Virgo

//Cámcer y Capricornio

if(dia >= 22 && mes == 6 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 6 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 7 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}

//Cáncer y Capricornio
//Fin de Cáncer

//Inicio de Sagitario

//Sagitario y Piscis

if(dia >= 23 && mes == 11 && dia2 >= 20 && mes2 == 2){
    alert("Son imtermedios")
}else if(dia <= 21 && mes == 12 && dia2 <= 20 && mes2 == 3){
    alert("Son imtermedios")
}else if(dia >= 23 && mes == 11 && dia2 <= 20 && mes2 == 3){
    alert("Son imtermedios")
}else if(dia <= 21 && mes == 12 && dia2 >= 20 && mes2 == 2){
    alert("Son imtermedios")
}

//Sagitario y Piscis

//Sagitario y Escorpio

if(dia >= 23 && mes == 11 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}

//Sagitario y Escorpio

//Sagitario y Tauro

if(dia >= 23 && mes == 11 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}

//Sagitario y Tauro

//Sagitario y Libra

if(dia >= 23 && mes == 11 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}

//Sagitario y Libra

//Sagitario y Cáncer

if(dia >= 23 && mes == 11 && dia2 >= 22 && mes2 == 6){
    alert("Son imtermedios")
}else if(dia <= 21 && mes == 12 && dia2 <= 22 && mes2 == 7){
    alert("Son imtermedios")
}else if(dia >= 23 && mes == 11 && dia2 <= 22 && mes2 == 7){
    alert("Son imtermedios")
}else if(dia <= 21 && mes == 12 && dia2 >= 22 && mes2 == 6){
    alert("Son imtermedios")
}

//Sagitario y Cáncer

//Sagitario y Sagitario

if(dia >= 23 && mes == 11 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}

//Sagitario y Sagitario

//Sagitario y Leo

if(dia >= 23 && mes == 11 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}

//Sagitario y Leo

//Sagitario y Acuario

if(dia >= 23 && mes == 11 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}

//Sagitario y Acuario

//Sagitario y Aries

if(dia >= 23 && mes == 11 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}

//Sagitario y Aries

//Sagitario y Virgo

if(dia >= 23 && mes == 11 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 22 && mes2 == 9){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 22 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}

//Sagitario y Virgo

//Sagitario y Capricornio

if(dia >= 23 && mes == 11 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 11 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 21 && mes == 12 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}

//Sagitario y Capricornio
//Fin de Sagitario

//Inicio de Leo
//Leo y Geminis

if(dia2 >= 23 && mes2 == 7 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}

//Leo y Géminis

//Leo y Piscis

if(dia2 >= 23 && mes2 == 7 && dia2 >= 20 && mes2 == 2){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 20 && mes2 == 3){
    alert("Son intermedios")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 20 && mes2 == 3){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 20 && mes2 == 2){
    alert("Son intermedios")
}

//Leo y Piscis

//Leo y Escorpio

if(dia2 >= 23 && mes2 == 7 && dia2 >= 23 && mes2 == 10){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 22 && mes2 == 11){
    alert("Son intermedios")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 22 && mes2 == 11){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 23 && mes2 == 10){
    alert("Son intermedios")
}

//Leo y Escorpio

//Leo y Tauro

if(dia2 >= 23 && mes2 == 7 && dia2 >= 21 && mes2 == 4){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <=21 && mes2 == 5){
    alert("Son intermedios")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <=21 && mes2 == 5){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 21 && mes2 == 4){
    alert("Son intermedios")
}

//Leo y Tauro

//Leo y Libra

if(dia2 >= 23 && mes2 == 7 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}

//Leo y Libra

//Leo y Cáncer

if(dia2 >= 23 && mes2 == 7 && dia2 >= 22 && mes2 == 6){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 22 && mes2 == 7){
    alert("Son intermedios")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 22 && mes2 == 7){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 22 && mes2 == 6){
    alert("Son intermedios")
}

//Leo y Cáncer

//Leo y Sagitario

if(dia2 >= 23 && mes2 == 7 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}

//Leo y Sagitario

//Leo y Leo

if(dia2 >= 23 && mes2 == 7 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}

//Leo y Leo

//Leo y Acuario

if(dia2 >= 23 && mes2 == 7 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 19 && mes2 == 2){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}

//Leo y Acuario

//Leo y Aries

if(dia2 >= 23 && mes2 == 7 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}

//Leo y Aries

//Leo y Virgo

if(dia2 >= 23 && mes2 == 7 && dia2 >= 23 && mes2 == 8){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 22 && mes2 == 9){
    alert("Son intermedios")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 22 && mes2 == 9){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 23 && mes2 == 8){
    alert("Son intermedios")
}

//Leo y Virgo

//Leo y Capricornio

if(dia2 >= 23 && mes2 == 7 && dia2 >= 22 && mes2 == 12){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 <= 20 && mes2 == 1){
    alert("Son intermedios")
}else if(dia2 >= 23 && mes2 == 7  && dia2 <= 20 && mes2 == 1){
    alert("Son intermedios")
}else if(dia2 <= 22 && mes2 == 8 && dia2 >= 22 && mes2 == 12){
    alert("Son intermedios")
}

//Leo y Capricornio
//Fin de Leo

//Inicio de Acuario
//Acuario y Geminis

if(dia >= 20 && mes == 2 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}

//Acuario y Géminis

//Acuario y Piscis

if(dia >= 20 && mes == 2 && dia2 >= 20 && mes2 == 2){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 20 && mes2 == 3){
    alert("No son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 20 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 20 && mes2 == 2){
    alert("No son compatibles")
}

//Acuario y Piscis

//Acuario y Escorpio

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 23 && mes2 == 10){
    alert("No son compatibles")
}

//Acuario y Escorpio

//Acuario y Tauro

if(dia >= 20 && mes == 2 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}

//Acuario y Tauro

//Acuario y Libra

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 23 && mes2 == 9){
    alert("Son compatibles")
}

//Acuario y Libra

//Acuario y Cáncer

if(dia >= 20 && mes == 2 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}

//Acuario y Cáncer

//Acuario y Sagitario

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}

//Acuario y Sagitario

//Acuario y Leo

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 3 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 8){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 3 && dia2 >= 23 && mes2 == 7){
    alert("Son intermedios")
}

//Acuario y Leo

//Acuario y Acuario

if(dia >= 20 && mes == 2 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 19 && mes == 2){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 19 && mes == 2){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}

//Acuario y Acuario

//Acuario y Aries

if(dia >= 20 && mes == 2 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}

//Acuario y Aries

//Acuario y Virgo

if(dia >= 20 && mes == 2 && dia2 >= 23 && mes2 == 8){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 3 && dia2 <= 22 && mes2 == 9){
    alert("Son intermedios")
}else if(dia >= 20 && mes == 2 && dia2 <= 22 && mes2 == 9){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 3 && dia2 >= 23 && mes2 == 8){
    alert("Son intermedios")
}

//Acuario y Virgo

//Acuario y Capricornio

if(dia >= 20 && mes == 2 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia >= 20 && mes == 2 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 3 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}

//Acuario y Capricornio
//Fin de Capricornio

//Inicio de Aries
//Aries y Geminis

if(dia >= 21 && mes == 3 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <=21 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 22 && mes2 == 5){
    alert("Son compatibles")
}

//Aries y Géminis

//Aries y Piscis

if(dia >= 21 && mes == 3 && dia2 >= 20 && mes2 == 2){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 4 && dia2 <= 20 && mes2 == 3){
    alert("Son intermedios")
}else if(dia >= 21 && mes == 3 && dia2 <= 20 && mes2 == 3){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 4 && dia2 >= 20 && mes2 == 2){
    alert("Son intermedios")
}

//Aries y Piscis

//Aries y Escorpio

if(dia >= 21 && mes == 3 && dia2 >= 23 && mes2 == 10){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 4 && dia2 <= 22 && mes2 == 11){
    alert("Son intermedios")
}else if(dia >= 21 && mes == 3 && dia2 <= 22 && mes2 == 11){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 4 && dia2 >= 23 && mes2 == 10){
    alert("Son intermedios")
}

//Aries y Escorpio

//Aries y Tauro

if(dia >= 21 && mes == 3 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <=21 && mes2 == 5){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 21 && mes2 == 4){
    alert("No son compatibles")
}

//Aries y Tauro

//Aries y Libra

if(dia >= 21 && mes == 3 && dia2 >= 23 && mes2 == 9){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 4 && dia2 <= 22 && mes2 == 10){
    alert("Son intermedios")
}else if(dia >= 21 && mes == 3 && dia2 <= 22 && mes2 == 10){
    alert("Son intermedios")
}else if(dia <= 20 && mes == 4 && dia2 >= 23 && mes2 == 9){
    alert("Son intermedios")
}

//Aries y Libra

//Aries y Cáncer

if(dia >= 21 && mes == 3 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 22 && mes2 == 7){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 22 && mes2 == 6){
    alert("No son compatibles")
}

//Aries y Cáncer

//Aries y Sagitario

if(dia >= 21 && mes == 3 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 21 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 23 && mes2 == 11){
    alert("Son compatibles")
}

//Aries y Sagitario

//Aries y Leo

if(dia >= 21 && mes == 3 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 22 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 23 && mes2 == 7){
    alert("Son compatibles")
}

//Aries y Leo

//Aries y Acuario

if(dia >= 21 && mes == 3 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 19 && mes == 2){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 19 && mes == 2){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 21 && mes2 == 1){
    alert("Son compatibles")
}

//Aries y Acuario

//Aries y Aries

if(dia >= 21 && mes == 3 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 20 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 21 && mes2 == 3){
    alert("Son compatibles")
}

//Aries y Aries

//Aries y Virgo

if(dia >= 21 && mes == 3 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 22 && mes2 == 9){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 22 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 23 && mes2 == 8){
    alert("No son compatibles")
}

//Aries y Virgo

//Aries y Capricornio

if(dia >= 21 && mes == 3 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia >= 21 && mes == 3 && dia2 <= 20 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 20 && mes == 4 && dia2 >= 22 && mes2 == 12){
    alert("No son compatibles")
}

//Aries y Capricornio
//Fin de Aries

//Inicio de Virgo
//Virgo y Géminis

if(dia >= 23 && mes == 8 && dia2 >= 22 && mes2 == 5){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 9 && dia2 <=21 && mes2 == 6){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 8 && dia2 <=21 && mes2 == 6){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 9 && dia2 >= 22 && mes2 == 5){
    alert("Son intermedios")
}

//Virgo y Géminis

//Virgo y Piscis

if(dia >= 23 && mes == 8 && dia2 >= 20 && mes2 == 2){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 9 && dia2 <= 20 && mes2 == 3){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 8 && dia2 <= 20 && mes2 == 3){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 9 && dia2 >= 20 && mes2 == 2){
    alert("Son intermedios")
}

//Virgo y Piscis

//Virgo y Escorpio

if(dia >= 23 && mes == 8 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}

//Virgo y Escorpio

//Virgo y Tauro

if(dia >= 23 && mes == 8 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}

//Virgo y Tauro

//Virgo y Libra

if(dia >= 23 && mes == 8 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}

//Virgo y Libra

//Virgo y Cáncer

if(dia >= 23 && mes == 8 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 22 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}

//Virgo y Cáncer

//Virgo y Sagitario

if(dia >= 23 && mes == 8 && dia2 >= 23 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 21 && mes2 == 12){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 21 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 23 && mes2 == 11){
    alert("No son compatibles")
}

//Virgo y Sagitario

//Virgo y Leo

if(dia >= 23 && mes == 8 && dia2 >= 23 && mes2 == 7){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 22 && mes2 == 8){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 22 && mes2 == 8){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 23 && mes2 == 7){
    alert("No son compatibles")
}

//Virgo y Leo

//Virgo y Acuario

if(dia >= 23 && mes == 8 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 19 && mes == 2){
    alert("No son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 19 && mes == 2){
    alert("No son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}

//Virgo y Acuario

//Virgo y Aries

if(dia >= 23 && mes == 8 && dia2 >= 21 && mes2 == 3){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 9 && dia2 <= 20 && mes2 == 4){
    alert("Son intermedios")
}else if(dia >= 23 && mes == 8 && dia2 <= 20 && mes2 == 4){
    alert("Son intermedios")
}else if(dia <= 22 && mes == 9 && dia2 >= 21 && mes2 == 3){
    alert("Son intermedios")
}

//Virgo y Aries

//Virgo y Virgo

if(dia >= 23 && mes == 8 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}

//Virgo y Virgo

//Virgo y Capricornio

if(dia >= 23 && mes == 8 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia >= 23 && mes == 8 && dia2 <= 20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <= 22 && mes == 9 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}

//Virgo y Capricornio

//Inicio Capricornio
//Capricornio y Geminis

if(dia >= 22 && mes == 12 && dia2 >= 22 && mes2 == 5){
    alert("Son intermedios")
}else if(dia <=20 && mes == 1 && dia2 <=21 && mes2 == 6){
    alert("Son intermedios")
}else if(dia >= 22 && mes == 12 && dia2 <=21 && mes2 == 6){
    alert("Son intermedios")
}else if(dia <=20 && mes == 1 && dia2 >= 22 && mes2 == 5){
    alert("Son intermedios")
}

//Capricornio y Geminis

// //Capricornio y Picis

if(dia >= 22 && mes == 12 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=20 && mes2 == 3){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 20 && mes2 == 2){
    alert("Son compatibles")
}

//Capricornio y Picis

//Capricornio y Tauro

if(dia >= 22 && mes == 12 && dia2 >= 22 && mes2 == 5){
    alert("Son intermedios")
}else if(dia <=20 && mes == 1 && dia2 <=21 && mes2 == 6){
    alert("Son intermedios")
}else if(dia >= 22 && mes == 12 && dia2 <=21 && mes2 == 6){
    alert("Son intermedios")
}else if(dia <=20 && mes == 1 && dia2 >= 22 && mes2 == 5){
    alert("Son intermedios")
}

//Capricornio y Tauro

//Capricornio y Escorpio

if(dia >= 22 && mes == 12 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=22 && mes2 == 11){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 23 && mes2 == 10){
    alert("Son compatibles")
}

//Capricornio y Escorpio

//Capricornio y Tauro

if(dia >= 22 && mes == 12 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=21 && mes2 == 5){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 21 && mes2 == 4){
    alert("Son compatibles")
}

//Capricornio y Tauro

//Capricornio y Libra

if(dia >= 22 && mes == 12 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=22 && mes2 == 10){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 23 && mes2 == 9){
    alert("No son compatibles")
}

//Capricornio y Libra

//Capricornio y Cáncer

if(dia >= 22 && mes == 12 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=20 && mes2 == 7){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=20 && mes2 == 7){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 22 && mes2 == 6){
    alert("Son compatibles")
}

//Capricornio y Cáncer

//Capricornio y Sagitario

if(dia >= 22 && mes == 12 && dia2 >= 23 && mes2 == 11){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=21 && mes2 == 12){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=21 && mes2 == 12){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 23 && mes2 == 11){
    alert("No son compatibles")
}

//Capricornio y Sagitario

//Capricornio y Leo

if(dia >= 22 && mes == 12 && dia2 >= 23 && mes2 == 7){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=22 && mes2 == 8){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=22 && mes2 == 8){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 23 && mes2 == 7){
    alert("No son compatibles")
}

//Capricornio y Leo

//Capricornio y Acuario

if(dia >= 22 && mes == 12 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=19 && mes2 == 2){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=19 && mes2 == 2){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 21 && mes2 == 1){
    alert("No son compatibles")
}

//Capricornio y Acuario

//Capricornio y Aries

if(dia >= 22 && mes == 12 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=20 && mes2 == 4){
    alert("No son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 21 && mes2 == 3){
    alert("No son compatibles")
}

//Capricornio y Aries

//Capricornio y Virgo

if(dia >= 22 && mes == 12 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=22 && mes2 == 9){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 23 && mes2 == 8){
    alert("Son compatibles")
}

//Capricornio y Virgo

//Capricornio y Capricornio

if(dia >= 22 && mes == 12 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 <=20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia >= 22 && mes == 12 && dia2 <=20 && mes2 == 1){
    alert("Son compatibles")
}else if(dia <=20 && mes == 1 && dia2 >= 22 && mes2 == 12){
    alert("Son compatibles")
}

//Capricornio y Capricornio
//Fin Capricornio

//Fin del cuadro de compatibilidad