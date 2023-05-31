let a = parseFloat(prompt("Digite o valor de a: "));
let b = parseFloat(prompt("Digite o valor de b: "));
let c = parseFloat(prompt("Digite o valor de c: "));

let delta = (b*b) - 4 * a * c;

if (delta < 0) {
    document.write("Equação não possui valor real");
} else if (delta > 0) {
    raiz1 = (-b + Math.sqrt(delta)) / (2*a);
    raiz2 = (-b - Math.sqrt(delta)) / (2*a);
    document.write("O valor de X¹ é " + raiz1 + ". O valor de X² é " + raiz2 +"");
} else{
    raiz = (-b + Math.sqrt(delta)) / (2*a);
    document.write("A equação possui uma raiz real, " + raiz+"");
}