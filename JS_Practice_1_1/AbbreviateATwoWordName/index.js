function AbbreviateTwoWordName(name) {
  mas_name = name.split(' ');
  console.log(mas_name[0][0] + '.' + mas_name[1][0]);
}

let mas_name;
let fullname;
fullname = window.prompt("Enter your name, to convert name into initials, please");

AbbreviateTwoWordName(fullname);
