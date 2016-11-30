'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attackPower, healthPower, name) {
    _classCallCheck(this, Character);

    this.name = name;
    this.attackPower = attackPower;
    this.healthPower = healthPower;
    this.winnerArr = [];
  }

  _createClass(Character, [{
    key: 'attack',
    value: function attack(opposingPlayer) {
      if (Math.random() > 0.5) {
        return opposingPlayer.healthPower = opposingPlayer.healthPower - this.attackPower;
      } else {
        return this.healthPower = this.healthPower - opposingPlayer.attackPower;
      }
    }
  }, {
    key: 'battle',
    value: function battle(opposingPlayer) {
      while (opposingPlayer.healthPower >= 0 && this.healthPower >= 0) {
        this.attack(opposingPlayer);
      }
      var winnerName = opposingPlayer.healthPower > 0 ? opposingPlayer.name : this.name;
      this.winnerArr.push(winnerName);
      return 'The winner is ' + winnerName + '!!!';
    }
  }, {
    key: 'broadcastScore',
    value: function broadcastScore() {
      this.winnerArr.map(function (name) {
        name;
      });
      // console.log(this.winnerArr);
      return this.winnerArr;
    }
  }]);

  return Character;
}();

// let winnerArr = [];
// winnerArr.map(name => {name});

(function () {
  var red = new Character(10, 100, 'Sharon');
  var blue = new Character(10, 100, 'Jenny');

  for (var i = 10; i > 0; i--) {
    red.battle(blue);
    red.healthPower = 100;
    blue.healthPower = 100;
  }

  console.log(red.broadcastScore());
})();
