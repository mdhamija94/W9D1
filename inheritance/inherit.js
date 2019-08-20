// Object.prototype.inherits = function (parent) {
//   function Surrogate () {}
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Object.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject() { }

MovingObject.prototype.direction = function () {
  console.log("east");
};

function Ship() { }
Ship.inherits(MovingObject);
Ship.prototype.numLives = function() {
  console.log(3);
};

function Asteroid() { }
Asteroid.inherits(MovingObject);

let ship = new Ship();
let aster = new Asteroid();

ship.direction();
ship.numLives();
aster.numLives();