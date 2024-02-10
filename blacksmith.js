// Functions
let isFireBurning = false;
let wood = 0;

function fire() {
  if (isFireBurning) {
    console.log("Stopping fire!");
    isFireBurning = false;
  } else {
    if (wood >= 1) {
      console.log("Starting fire!");
      isFireBurning = true;
      wood -= 1;
    } else {
      console.log("Not enough wood to start a fire.");
    }
  }
}

let money = 0;
let inventory = {
  ore: 0,
  wood: 0
};

function buy(item) {
  let cost = 0;
  let itemName = "";

  if (item === "ore") {
    cost = 3;
    itemName = "piece of ore";
  } else if (item === "wood") {
    cost = 1;
    itemName = "piece of wood";
  } else {
    console.log("Invalid item.");
    return;
  }

  if (isFireBurning) {
    console.log("Cannot buy items while the fire is burning.");
    return;
  }

  if (money < cost) {
    console.log("Not enough money to buy a " + itemName + ".");
    return;
  }

  console.log("Buying a " + itemName + ".");
  money -= cost;
  inventory[item] += 1;
}

let inventory = {
  ore: 0,
  wood: 0,
  sword: 0,
  axe: 0
};

function make(weapon) {
  let oreNeeded = 0;
  let woodNeeded = 0;
  let weaponName = "";

  if (weapon === "sword") {
    oreNeeded = 2;
    woodNeeded = 1;
    weaponName = "sword";
  } else if (weapon === "axe") {
    oreNeeded = 1;
    woodNeeded = 2;
    weaponName = "axe";
  } else {
    console.log("Invalid weapon.");
    return;
  }

  if (!isFireBurning) {
    console.log("Cannot make weapons while the fire is not burning.");
    return;
  }

  if (inventory.ore < oreNeeded) {
    console.log("Not enough ore to make a " + weaponName + ".");
    return;
  }

  if (inventory.wood < woodNeeded) {
    console.log("Not enough wood to make a " + weaponName + ".");
    return;
  }

  console.log("Making a " + weaponName + ".");
  inventory.ore -= oreNeeded;
  inventory.wood -= woodNeeded;
  inventory[weapon] += 1;
}

function sell(weapon, price) {
  if (!isFireBurning) {
    console.log("Cannot sell weapons while the fire is not burning.");
    return;
  }

  if (inventory[weapon] < 1) {
    console.log("You do not have any " + weapon + " to sell.");
    return;
  }

  console.log("Selling one " + weapon + " for " + price + " pieces of gold.");
  inventory[weapon] -= 1;
  inventory.gold += price;
}

function inventory() {
  console.log("Current inventory:");
  console.log("Ore: " + inventory.ore);
  console.log("Wood: " + inventory.wood);
  console.log("Sword: " + inventory.sword);
  console.log("Axe: " + inventory.axe);
  console.log("Gold: " + inventory.gold);
}

function help() {
  return `INSTRUCTIONS:
Blacksmith is a simple text-based game. As a blacksmith, you convert ore and wood into swords and axes. You buy your resources using gold and sell your weapons for gold.

COMMANDS:
- fire()
- buy(item)
- make(item)
- sell(item)
- inventory()
- help()`;
}
done