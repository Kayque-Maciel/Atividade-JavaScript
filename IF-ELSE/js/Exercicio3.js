let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

document.write("<h1>Os números digitados foram " + n1 + ", " + n2 + " e " + n3 + "</h1>");
document.write("<br>");
if (n1 > n2 && n1 > n3) {
    document.write("<h1>O maior número entre eles é: " + n1 + ".</h1>")
}
else if (n2 > n3 && n2 > n1) {
    document.write("<h1>O maior número entre eles é: " + n2 + ".</h1>")
}
else {
    document.write("<h1>O maior número entre eles é: " + n3 + ".</h1>")
}