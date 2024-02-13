// Variables
let gold = 10;
let wood = 5;
let ore = 3;
let swordCount = 2;
let axeCount = 3;
let fireStatus = false;
let price = 0

// Functions
function fire() {
  if (fireStatus) {
    fireStatus = false;
    console.log('Fire is out');
  } else if (wood > 0) {
    fireStatus = true;
    wood = wood - 1;
    console.log('The fire is going');
  } else {
    console.log("You don't have any more wood");
  }
}

function buy(item, cost, amount) {
  if (gold === cost) {
    gold + cost;
    if (item === 'wood') {
      wood += amount;
    } else if (item === 'ore') {
      ore += amount;
    }
    console.log(`You bought ${amount} ${item}`);
  } else {
    console.log(`You need ${cost + gold} more gold`);
  }

}


function make(item) {
  if (item ===  "sword") {
    if (wood >= 2 && gold >= 4) {
      wood -= 2;
      gold -= 4;
      swordCount++;
      console.log('Sword made! You now have a sword');
    } else {
      console.log('Not enough resources to create a sword');
    }
  } else if (item === "axe") {
    if (wood >= 3 && ore >= 2) {
      wood -= 3;
      ore -= 2;
      axeCountCount++;
      console.log('axe made! You now have a axe');
      } else {
        console.log('Not enough resources to create a axe');
      }
  }
}
  
function sell(item) {
  let price = 0;
  if (item === 'sword') {
    price = 4;
    gold += price * swordCount;
    swordCount = 0;
  } else if (item === 'axe') {
    price = 6;
    gold += price * axeCount;
    axeCount = 0;
  }
  items[item]--;
  inventory();
  console.log(`You sold your ${item}, making ${gold - price} gold.`);

}

function inventory() {
  console.log(`Sword Count: ${swordCount}`);
  console.log(`Axe Count: ${axeCount}`);
  console.log(`Fire Status: ${fireStatus}`);
  console.log(`Gold: ${gold}`);
}

function help() {
  console.log('Instructions for the game:');
  console.log('- Use the "make" command to create items like swords and axes.');
  console.log('- Use the "sell" command to sell items and earn gold.');
  console.log('- Use the "inventory" command to check your current inventory.');
  console.log('- Use the "help" command to display these instructions again.');
}

help(); // Example usage: display the instructions for the game
