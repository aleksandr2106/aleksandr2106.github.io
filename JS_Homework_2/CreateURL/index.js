//CreateURl


function CorrectTime(t, c){
  return c.test(time);
}

let correct_time = /^(([01][0-9])|(2[0-3])):[0-5][0-9]$/;
let result;

do {
  time = window.prompt("Enter any time, for checks, please");
  result = CorrectTime(time, correct_time);
  if (result) {
    alert("Correct Format");
  } else {
    alert("Incorrect Format");
  }
} while (!result);
