let ano = parseInt(prompt("Informe o ano:"));

if (ano % 4 == 0 && ano % 100 !== 0 || ano % 400 == 0) {
    document.write("O ano de " +ano+" é um ano bissexto");

} else {
    document.write("O ano de "+ano+" não é um ano bissexto");
}