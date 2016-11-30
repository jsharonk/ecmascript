"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attackPower, healthPower, name) {
    _classCallCheck(this, Character);

    this.name = name;
    this.attackPower = attackPower;
    this.healthPower = healthPower;
  }

  _createClass(Character, [{
    key: "attack",
    value: function attack(opposingPlayer) {
      if (Math.random > 0.5) {
        return opposingPlayer.healthPower = opposingPlayer.healthPower - this.attackPower;
      } else {
        return this.healthPower = this.healthPower - opposingPlayer.attackPower;
      }
    }
  }, {
    key: "battle",
    value: function battle(opposingPlayer) {

      while (opposingPlayer.healthPower >= 0 && this.healthPower >= 0) {
        this.attack(opposingPlayer);
      }
      return opposingPlayer.healthPower > 0 ? opposingPlayer.name : this.name;
    }
  }]);

  return Character;
}();

var red = new Character(attackPower, healthPower, name);
var blue = new Character(attackPower, healthPower, name);

var winnerArr = [];
winnerArr.map(item, function (index) {
  winner: item;
});
