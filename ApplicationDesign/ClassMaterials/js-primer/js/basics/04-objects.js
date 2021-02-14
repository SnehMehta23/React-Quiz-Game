// Object - packaging up related data and functionality together.

// Object literal:
const player = {
  numLives: 4,
  name: "Sneh",
  stats: {
    attack: 5,
    defense: 3,
    agility: 2,
  },
  addExtraLife() {
    this.numLives++;
  },
  printInfo() {
    console.log(
      `The player ${this.name} has ${this.numLives} lives remaining.`
    );
  },
};

// Dot syntax to access properties (name and number of lives of the player object)
console.log(
  `The player ${player.name} has ${player.numLives} lives remaining.`
);
// Or bracket notation
console.log(
  `The player ${player["name"]} has ${player["numLives"]} lives remaining.`
);
console.log(`The player has an attack of: ${player.stats.attack}.`);
player.addExtraLife();
player.printInfo();

// Classes:
class Character {
  constructor(name, profession) {
    this.name = name;
    this.profession = profession;
  }

  greet() {
    console.log(
      `My name is ${this.name} and my profession is ${this.profession}.`
    );
  }
}

const rafael = new Character("Rafael", "Merchant");
rafael.greet();

const sam = new Character("Sam", "Warrior");
sam.greet();
