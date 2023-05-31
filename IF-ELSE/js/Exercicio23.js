let mo = parseFloat(prompt("Informe quantos Kg de morango deseja:"));
let ma = parseFloat(prompt("Informe quantos Kg de maçã deseja:"));
let precomo, precoma = 0;

if (mo <= 5) {
    precomo = 2.5;
} else {
    precomo = 2.2;
}
let valormo = mo * precomo;

if (ma <= 5) {
    precoma = 1.8;
} else {
    precoma = 1.5;
}
let valorma = ma * precoma;
let total = valormo + valorma;

if (mo + ma > 8 || total > 25) {
    total = total - (total * (0.10));
}
document.write("O valor a ser pago é de R$" + total.toFixed(2));