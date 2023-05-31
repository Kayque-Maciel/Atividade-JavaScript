let n1= parseInt(prompt("Digite o primeiro número: "));
let n2= parseInt(prompt("Digite o segundo número: "));
        
let variavel1 = n1;
let variavel2 = n2

n1=variavel2;
n2=variavel1;

alert("Antes:\n"+ "Primeiro número "+ n1+ " Segundo número "+n2+"\n"+
"Depois:\n"+ "Primeiro número "+ n2+ " Segundo número "+n1+"");