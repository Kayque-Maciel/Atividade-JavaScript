let n1= parseFloat(prompt("Digite a primeira nota: "));
let n2= parseFloat(prompt("Digite a segunda nota: "));

media= (n1+n2)/2;

if(media==10){
    document.write("<h1>A média é de "+ media + " o aluno está aprovado com distinção</h1>");
            
}else if(media>=7){
    document.write("<h1>A média é de "+ media + " o aluno está aprovado</h1>");

}else{
    document.write("<h1>A média é de "+ media + " o aluno está reprovado</h1>");
}
