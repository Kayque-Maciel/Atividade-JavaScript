let turno= prompt("Em que turno você estuda? Digite M para 'Matutino', V para 'Vespertino' ou N para 'Noturno'.")

if(turno=="M" && "m"){
    document.write("Bom Dia!");
}
else if(turno=="V" && "v"){
    document.write("Boa Tarde!");
}
else if(turno=="N" && "n"){
    document.write("Boa Noite!");
}
else{
    document.write("Valor inválido!");
}