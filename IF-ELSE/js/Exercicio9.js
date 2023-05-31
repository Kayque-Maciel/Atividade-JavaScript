let hora = parseFloat(prompt("Informe a quantidade de horas trabalhadas:"));
let valor = parseFloat(prompt("Informe o valor da hora de trabalho:"));

let salariobruto= hora * valor;
document.write("Salário Bruto: R$"+salariobruto+"</br>");

let IR = 0;
if (salariobruto <= 900) {
  IR = 0;
  document.write("Imposto de Renda (isento): R$"+IR+".</br>");
} else if (salariobruto <= 1500) {
  IR = salariobruto * (5/100);
  document.write("Imposto de Renda (5%): R$"+IR+".</br>");
} else if (salariobruto <= 2500) {
  IR = salariobruto * (10/100);
  document.write("Imposto de Renda (10%): R$"+IR+".</br>");
} else if(salariobruto > 2500){
  IR = salariobruto * (20/100);
  document.write("Imposto de Renda (20%): R$"+IR+".</br>");
}

let inss = salariobruto * 0.10;
document.write("INS (10%): R$"+inss+".</br>");
let fgts = salariobruto * 0.11;
document.write("FGTS (11%): R$"+fgts+".</br>");
let desconto = IR + inss + (salariobruto * (3/100)); 
document.write("Total de descontos: R$"+desconto+".</br>");
let salarioliquido = salariobruto - desconto;
document.write("Salário Líquido: R$"+salarioliquido+".");