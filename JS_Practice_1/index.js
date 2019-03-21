//          First Task
/*
var result = 0;
do {
  result = window.prompt("Enter number greater than 100, please");
} while (result <= 100 && result == 0);

console.log("Access");
*/

//          Second Task
/*
for (let i = 2; i <= 100; i++) {
  let prime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(i);
  }

  prime = false;
}
*/

//         Third Task
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Buzz");
  } else if (i % 5 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
