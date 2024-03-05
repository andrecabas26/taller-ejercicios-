let primerNumero = prompt("Ingrese el primer número:");
let segundoNumero = prompt("Ingrese el segundo número:");

// Convertir los valores ingresados a números
primerNumero = parseFloat(primerNumero);
segundoNumero = parseFloat(segundoNumero);

if (isNaN(primerNumero) || isNaN(segundoNumero)) {
    console.log("Por favor ingrese números válidos.");
} else {
    if (primerNumero > segundoNumero) {
        console.log("El primer número (" + primerNumero + ") es mayor que el segundo número (" + segundoNumero + ").");
    } else if (segundoNumero > primerNumero) {
        console.log("El segundo número (" + segundoNumero + ") es mayor que el primer número (" + primerNumero + ").");
    } else {
        console.log("Los dos números son iguales.");
    }
}