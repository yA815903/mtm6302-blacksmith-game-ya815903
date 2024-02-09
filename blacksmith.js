



// Functions

function Fire() {
  this.isBurning = false;
  this.woodAmount = 100;
}

Fire.prototype.startFire = function() {
  if (!this.isBurning && this.woodAmount > 0) {
    this.isBurning = true;
    this.woodAmount--;
    console.log("Fire started.");
  } else {
    console.log("Cannot start fire.");
  }
};

Fire.prototype.stopFire = function() {
  this.isBurning = false;
  console.log("Fire stopped.");
};

// Usage
var myFire = new Fire();
myFire.startFire(); // Fire started.
myFire.stopFire(); // Fire stopped.




/**
 * make
 */


/**
 * sell
 */


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
