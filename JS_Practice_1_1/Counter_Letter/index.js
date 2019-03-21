function counter(text, letter) {
  mas_text = text.toLowerCase().split("");
  for (let i = 0; i < mas_text.length; i++) {
    if (mas_text[i] == letter) {
      count++;
    }
  }
  console.log(
    "The number of occurrences of the letter in the string = " + count
  );
}

let text1, letter1;
let mas_text;
let count = 0;
text1 = window.prompt("Enter your text, please");
letter1 = window.prompt("Enter your letter, please");

counter(text1, letter1);
