// Variables
let fireStatus = false;
let wood = 1;
let gold = 10
let ore  = 20;
let swordCount = 5;
let axeCount = 3
let weapon =[`Sword`, `Axe`];

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
    console.log(`You bought ${item}`)
  }
}

function make(weapons){
  if (weapons ===  "sword"){
    ore= ore - 5;
    console.log(  `You made a sword ${weapons}`);
  }else if (weapons === axe){
    ore= ore- 10;
    console.log (`You made an axe`);
  }
}

function sell(weapon) {
  if (fireBurning) {
      if (weapon === 'sword') {
        if (swordCount > 0) {
          swordCount--;
          gold += Math.floor(Math.random() * 6) + 4;
          console.log(`You sold a sword for ${gold} gold`);
        } else {
          console.log('You don\'t have any swords to sell');
        }
      } else if (weapon === 'axe') {
        if (axeCount > 0) {
          axeCount--;
          gold += Math.floor(Math.random() * 8) + 3;
          console.log(`You sold an axe for ${gold} gold`);
        } else {
          console.log('You don\'t have any axes to sell');
        }
      } else {
        console.log('Unknown weapon type');
      }
    } else {
      console.log('The blacksmith does not have that weapon');
    }
}



/**
 * inventory
 * Shows the players current inventory
 */


/**
 * Help Command
 * Returns the instruction on how to play the game.
 */
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