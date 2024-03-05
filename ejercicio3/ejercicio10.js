html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificar Edad</title>
</head>
<body>
    <script>
        // Solicitar la edad al usuario
        let edad = prompt("Por favor, ingresa tu edad:");

        // Convertir la entrada a un número entero
        edad = parseInt(edad);

        // Verificar si es mayor de edad
        if (edad >= 18) {
            alert("Eres mayor de edad. 🎉");
        } else {
            alert("Eres menor de edad. 👶");
        }
    </script>
</body>
</html>