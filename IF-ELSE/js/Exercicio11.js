let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
media = (n1 + n2) / 2;

if(media>=9 && media<=10){
    alert("A média dessas notas é: " + media+", equivalente ao conceito 'A', o aluno está APROVADO");
}
else if(media>=7.5 && media<=8.9){
    alert("A média dessas notas é " + media+", equivalente ao conceito 'B', o aluno está APROVADO");
}
else if(media>=6 && media<=7.4){
    alert("A média dessas notas é " + media+", equivalente ao conceito 'C', o aluno está APROVADO");
}
else if(media>=4 && media<=5.9){
    alert("A média dessas notas é " + media+", equivalente ao conceito 'D', o aluno está REPROVADO");
}
else if(media>=0 && media<=3.9){
    alert("A média dessas notas é " + media+", equivalente ao conceito 'E', o aluno está REPROVADO");
}