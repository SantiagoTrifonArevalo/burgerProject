//Ejercicio 1 - Hamburguesa
// Crear una función makeBurger que reciba más de 3 parámetros, todos tienen que ser strings.
// El primero y el último serán "pan", y los demás ingredientes los eligirá el usuario mediante un modal.
// En la función se creará un objeto cuyo primer y último valor serán el "pan" que le pasamos por parámetros de entrada. El resto de parámetros ponedlos en el orden que prefiráis.
// Mostrar por consola el resultado(objeto).

// Ventana modal
let modal = document.getElementById("ventanaModal");

// Botón que abre el modal
let boton = document.getElementById("abrirModal");

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace click en el botón, se abre la ventana
boton.addEventListener("click",function() {
  modal.style.display = "block";
});

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function makeBurger(panSuperior, tomate, lechuga, pimiento, panInferior) {
    const burger = {
        panSuperior: panSuperior,
        ingredientes: [tomate, lechuga, pimiento],
        panInferior: panInferior,
      };
      console.log(makeBurger);
}
makeBurger(("panSuperior", "tomate", "lechuga", "pimiento", "panInferior"));

// Ejercicio 2 - Operaciones

// Paso 1
// Crear una función operations que reciba 2 parámetros de entrada.
// En la función del anterior paso, retornar un array de 3 posiciones con diferentes operaciones en cada posición. Se tienen que usar los 2 parámetros en cada operación.

function operations(a, b) {
  const resultado = [
    a + b,   
    a - b,   
    a / b    
  ];

  return resultado;
}
const resultadoOperaciones = operations(3, 7);
console.log(resultadoOperaciones);

// Paso 2
// Crear otra función startOperation que tenga 2 parámetros de entrada y hacer un log de la funcion operations por cada diferente posición del array.

function operations(a, b) {
  const resultado = [
    a + b,   // Suma
    a - b,   // Resta
    a * b    // Multiplicación
  ];

  return resultado;
}

function startOperation(a, b) {
  const resultOperation = operations(a, b);

  for (let index = 0; index < resultOperation.length; index++) {
    const result = resultOperation[index];
    if (index === 2) {
      console.log(`El resto de la división de ${a}/${b} es = ${result}.`);
      const confirmation = confirm("¿Desea confirmar?");
      if (!confirmation) {
        console.log("Operación cancelada.");
        return;
      }
    } else {
      console.log(`Resultado ${index}: ${result}`);
    }
  }
}
startOperation(4, 6);