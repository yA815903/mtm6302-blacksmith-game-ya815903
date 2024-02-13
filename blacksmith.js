// Variables
let fireStatus = false;
let wood = 1;
let gold = 10;
let ore = 20;
let inventory = [];
let swordCount = 1;
let axeCount = 1;

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

function buy(item) {
  if (item === 'wood') {
    gold = gold - 1;
    console.log(`You bought ${item}`);
  }
}

function make(item) {
  if (item === wood && item === ore) {
    wood -= wood -1;
    ore -= ore -1;
    if (item === "sword") {
      inventory.push("sword");
      swordCount++;
      console.log(`You have crafted a ${item}.`);
    } else if (item === "axe") {
      inventory.push("axe");
      axeCount++;
      console.log(`You have crafted an ${item}.`);
    }
  } else {
    console.log(`You do not have enough resources to craft ${item}.`);
  }
}
 
function sell(item, price) {
  if (inventory.includes(item) && fireStatus === "burning") {
    gold += price;
    inventory.splice(inventory.indexOf(item), 1);
    console.log(`You have sold ${item} for ${price} gold.`);
  } else if (inventory.includes(item) && fireStatus === "not burning") {
    console.log(`You cannot sell ${item} while the fire is not burning.`);
  } else {
    console.log(`You do not have ${item} to sell.`);
  }
}

function help () {
  return `INSTRUCTIONS:
  Blacksmith is a simple text base game. 
  
  As a blacksmith you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.
  
  COMMANDS:
  - buy(item)
  - make(item)
  - sell(item)
  - fire()
  - inventory()
  - help()`
}

// Log the help() function
console.log(help())