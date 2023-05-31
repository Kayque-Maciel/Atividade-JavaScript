let n1= parseInt(prompt("Digite o primeiro número: "));
let n2= parseInt(prompt("Digite o segundo número: "));
let n3= parseInt(prompt("Digite o terceiro número: "));

if(n1>n2 && n2>n3){
    document.write("O maior número entre eles é: "+ n1+". O menor número entre eles é: "+n3+".")
}
else if(n1>n3 && n3>n2){
    document.write("O maior número entre eles é: "+ n1+". O menor número entre eles é: "+n2+".")
}
else if(n2>n1 && n1>n3){
    document.write("O maior número entre eles é: "+ n2+". O menor número entre eles é: "+n3+".")
}
else if(n2>n3 && n3>n1){
    document.write("O maior número entre eles é: "+ n2+". O menor número entre eles é: "+n1+".")
}
else if(n3>n1 && n1>n2){
    document.write("O maior número entre eles é: "+ n3+". O menor número entre eles é: "+n2+".")
}
else{
    document.write("O maior número entre eles é: "+ n3+". O menor número entre eles é: "+n1+".")
}