let jewels, stones;
let mas_jewels;
let mas_stones;
let count = 0;

jewels = window.prompt("Enter your jewels, please");
stones = window.prompt("Enter your stones, please");

mas_jewels = jewels.split("");
mas_stones = stones.split("");

for (let i = 0; i < mas_jewels.length; i++) {
  for (let j = 0; j < mas_stones.length; j++) {
    if (mas_jewels[i] == mas_stones[j]) {
      count++;
    }
  }
}

console.log("Count of our jewels = " + count);
