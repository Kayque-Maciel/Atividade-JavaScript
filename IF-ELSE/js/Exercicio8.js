let salario = parseFloat(prompt("Informe o salário do colaborador:"));
let porceaumento;

if (salario <= 279.00) {
    porceaumento = 20;
} else if (salario <= 700.00) {
    porceaumento = 15;
} else if (salario <= 1500.00) {
    porceaumento = 10;
} else {
    porceaumento = 5;
}

let aumento = (salario * porceaumento) / 100;
let Salarionovo = salario + aumento;

document.write("Salário antes do reajuste: R$" + salario+"</br>");
document.write("Percentual de aumento aplicado: " + porceaumento + "%</br>");
document.write("Valor do aumento: R$" + aumento+"</br>");
document.write("Após o aumento: R$" + Salarionovo);