function checkOnPolindrom(text) {
  mas_text = text.toLowerCase().split('');
  mas_reverse_text = text.toLowerCase().split('').reverse();
  for( let i = 0; i < mas_text.length; i++){
    if(mas_text[i] == mas_reverse_text[i]){
      continue;
    } else {
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    console.log('This text is a polindrom!!!');
  } else if (flag == 0) {
    console.log('This text is not a polindrom!!!');
  }

}

let mas_text;
let mas_reverse_text;
let someText;
let flag = 1;
someText = window.prompt("Enter your name, please");

checkOnPolindrom(someText);
