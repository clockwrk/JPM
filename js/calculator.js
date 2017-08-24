var calculator = function(){

}

calculator.prototype.add = function (...args) {
  return args[0] + args[1];
};

calculator.prototype.subtract = function (...args) {
  return args[0] - args[1];
};

calculator.prototype.multiply = function (...args) {
  return args[0] * args[1];
};

calculator.prototype.divide = function (...args) {
  if(args[1]===0) return args[0]/undefined;
  return args[0] / args[1];
}

module.exports = calculator;
