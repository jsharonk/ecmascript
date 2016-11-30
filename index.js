class Character {
  constructor(attackPower, healthPower, name) {
    this.name = name;
    this.attackPower = attackPower;
    this.healthPower = healthPower
  }

  attack(opposingPlayer) {
    if (Math.random > 0.5) {
      return opposingPlayer.healthPower = opposingPlayer.healthPower - this.attackPower;
    } else {
      return this.healthPower = this.healthPower - opposingPlayer.attackPower;
    }
  }
  battle(opposingPlayer) {

    while (opposingPlayer.healthPower >= 0 && this.healthPower >= 0) {
      this.attack(opposingPlayer);
    }
    return (opposingPlayer.healthPower > 0) ? opposingPlayer.name : this.name;

 }
}

let red = new Character(attackPower, healthPower, name);
let blue = new Character(attackPower, healthPower, name);


let winnerArr = [];
winnerArr.map(item, index => {winner: item});
