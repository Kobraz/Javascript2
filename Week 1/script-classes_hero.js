// Classes

class Hero {
  constructor(health, characterName) {
    this.health = health;
    this.name = characterName;
  }

  attack() {
    console.log("Attacks the enemy");
  }
}

class Warrior extends Hero {
  charge() {
    console.log(`${this.name} charges into battle`);
  }
}

class Wizard extends Hero {
  shootFireball() {
    console.log("Fireballll!");
  }
}

const playerCharacter1 = new Warrior(100, "Ola");
const playerCharacter2 = new Wizard(30, "Kari");

console.log(playerCharacter1);
playerCharacter1.charge();

console.log(playerCharacter2);
playerCharacter2.shootFireball();
