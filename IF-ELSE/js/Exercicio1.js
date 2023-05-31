let letra= prompt("Informe uma letra: ");

if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    document.write("<h1>A letra "+ letra + " é uma vogal</h1>");

}else if(letra=='A' || letra=='E' || letra=='I' || letra=='O' || letra=='U'){
    document.write("<h1>A letra "+ letra + " é uma vogal</h1>");

}else{
    document.write("<h1>A letra "+ letra + " é uma consoante</h>");
}