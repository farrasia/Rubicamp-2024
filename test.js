
const array = [2, 2, 3, 4];
let integer = 0;

for (let i = 0; i < array.length; i++) {
  integer = integer * 10 + array[i];
}

console.log(integer); // Outputs: 1234