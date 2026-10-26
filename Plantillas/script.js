function add(n) {
  console.log("Agregar:", n);
  return n;
}

// Función para sumar los números
function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i <= numbers.length; i++) {
    sum += add(numbers[i]);
  }

  return sum;
}

const result = sumNumbers([10, 20, 30]);
console.log(result);
