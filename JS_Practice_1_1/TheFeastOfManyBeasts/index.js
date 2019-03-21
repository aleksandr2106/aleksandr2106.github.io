function feast(beast, dish) {
  if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
    return true;
  } else {
    return false;
  }
}

let beast1, dish1;

beast1 = window.prompt("Enter your beast, please");
dish1 = window.prompt("Enter your dish, please");

if (feast(beast1, dish1)) {
  console.log("Access");
} else {
  console.log("ERROR");
}
