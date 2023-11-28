//alert;

// funcion tradicional 

function calcularIMC() {
for (let i = 0; i <= 1; i += 1) {
    let peso = prompt("Ingrese su peso en kilogramos:");
    let altura = prompt("Ingrese su altura en centímetros:");
    let imc = peso / ((altura / 100) * (altura / 100));

    switch (i) {
        case 0:


            if (imc < 18.5) {
                alert("Bajo peso");
            } else if (imc >= 18.5 && imc < 25) {
                alert("Peso Normal");
            } else if (imc >= 25 && imc < 30) {
                alert("Sobrepeso");
            } else if (imc >= 30 && imc <= 40) {
                alert("Obesidad");
            } else if (imc > 40) {
                alert("Obesidad Morbida");
            }

            break;

        default:
            alert("No se ha podido realizar el cálculo");
            break;
    }
}

}

// si quiero llamar a la funcion lo realizo de la siguiente manera:

calcularIMC();

