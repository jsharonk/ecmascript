class Character {
  constructor(attackPower, healthPower, name) {
    this.name = name;
    this.attackPower = attackPower;
    this.healthPower = healthPower;
    this.winnerArr = [];
  }

  attack(opposingPlayer) {
    if (Math.random() > 0.5) {
      return opposingPlayer.healthPower = opposingPlayer.healthPower - this.attackPower;
    } else {
      return this.healthPower = this.healthPower - opposingPlayer.attackPower;
    }
  }

  battle(opposingPlayer) {
    while (opposingPlayer.healthPower >= 0 && this.healthPower >= 0) {
      this.attack(opposingPlayer);
    }
    let winnerName = (opposingPlayer.healthPower > 0) ? opposingPlayer.name : this.name;
    this.winnerArr.push(winnerName);
    return `The winner is ${winnerName}!!!`;
 }

  broadcastScore(){
    this.winnerArr.map(name => {name});
    // console.log(this.winnerArr);
    return this.winnerArr;
  }

}

// let winnerArr = [];
// winnerArr.map(name => {name});

(function(){
  let red = new Character(10, 100, 'Sharon');
  let blue = new Character(10, 100, 'Jenny');


  for (var i = 10; i > 0; i--) {
    red.battle(blue);
    red.healthPower = 100;
    blue.healthPower = 100;
  }

  console.log(red.broadcastScore());
})();
