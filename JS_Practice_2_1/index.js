// <--------------------Task 0--------------------->


// var user = {};
// user.name = 'Vasya';
// user.surname = 'Petrov';
// user.name = 'Sergey';
// delete user.name;
//
// console.log(user);


// <--------------------Task 1--------------------->


// function isEmpty(obj) {
// var counter = 0;
// for (var key in obj) {
//   counter++;
// }
// if (counter === 0) {
//   console.log('true');
// }else {
//   console.log('false');
// }
//
// }
//
// var schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "подъём";
//
// alert( isEmpty(schedule) ); // false


// <--------------------Task 2----------------------->


// var s = 0;
//
// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };
//
// function sum(obj) {
// for (var key in obj) {
//   s +=obj[key];
// }
// console.log('Sum = ', s);
// }
//
// sum(salaries);


// <--------------------Task 3--------------------->

var s = 0;
var name;
var salaries = {
  "Vasya": 100,
  "Petya": 300,
  "Dasha": 250
};

function maxV(obj) {
  for (var key in obj) {
    if(s < obj[key]){
      s = obj[key];
      name = key;
    }
  }
  if (s === 0) {
    console.log('Salaries list is empty');
  } else if (s > 0) {
    console.log('Max salary in ', name);
  }
}

maxV(salaries);


// <--------------------Task 4----------------->

// var menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// function multiplyNumeric(obj){
//   for (var key in obj) {
//     if(isNumeric(obj[key])){
//       obj[key] *= 2;
//     }
//   }
// }
//
// multiplyNumeric(menu);
//
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }
//
// console.log(menu);
