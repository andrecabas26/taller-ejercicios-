function verificarNumero(numero) {
    if (numero > 0) {
        return "positivo";
    } else if (numero < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Ejemplos de uso de la función
console.log(verificarNumero(10)); // Salida: "positivo"
console.log(verificarNumero(-5)); // Salida: "negativo"
console.log(verificarNumero(0));  // Salida: "cero"