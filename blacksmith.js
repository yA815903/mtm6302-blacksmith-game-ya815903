// Variables
let gold = 10;
let wood = 5;
let ore = 3;
let swordCount = 0;
let axeCount = 0;
let fireStatus = false;

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
  if (item === 'sword') {
    if (ore >= 2 && wood >= 1) {
      ore -= 2;
      wood -= 1;
      swordCount++;
      return true;
    } else {
      return false;
    }
  } else if (item === 'axe') {
    if (ore >= 1 && wood >= 2) {
      ore -= 1;
      wood -= 2;
      axeCount++;
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}


function sell(item, price) {
  if (item === 'sword') {
    swordCount--;
    gold += price;
    return true;
  } else if (item === 'axe') {
    axeCount--;
    gold += price;
    return true;
  } else if (item === 'fire' && fireStatus === true) {
    fireStatus = false;
    gold += price;
    return true;
  } else {
    return false;
  }
}



function inventory() {
  console.log(`Inventory: ${inventory.join(', ')}`);
}

// Log the help() function
console.log(help());