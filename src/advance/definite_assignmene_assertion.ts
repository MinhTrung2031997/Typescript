let dice!: number;
function rollDice() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice();
console.log("Current Dice value:", dice);

rollDice();
console.log("After another roll:", dice);
