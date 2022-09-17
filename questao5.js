let lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// criando um for parar percorrer o array
console.log("Números impares");
for(let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 !== 0) {
        console.log(lista[i]);
    }
}
console.log("Números pares:");
for(let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 == 0) {
        console.log( lista[i]);
    }
}

console.log("Todos os elementos multiplicados por 3:");
for(let i = 0; i < lista.length; i++) {
        console.log(`Posição ${lista[i]} * 3 = `  +  lista[i] * 3);
}

console.log("Números  menores que 6:");
for(let i = 0; i < lista.length; i++) {
    if(lista[i] < 6) {
        console.log( lista[i]);
    }
}

console.log("Ordem decrescente:");
let numbersDesc = lista.sort(function(a, b) {
    return b - a;
});
console.log(numbersDesc);
