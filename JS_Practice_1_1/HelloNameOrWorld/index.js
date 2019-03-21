function hello(name) {
  if (name != "") {
    console.log(
      "Hello " + name[0].toUpperCase() + name.substring(1).toLowerCase() + "!"
    );
  } else {
    console.log("Hello World!");
  }
}

let fullname;
fullname = window.prompt("Enter your name, please");

hello(fullname);
