var Calculator = require('./calculator.js');
var ScientificCalculator =  function(){}

ScientificCalculator.prototype = Object.create(Calculator.prototype);


ScientificCalculator.prototype.sin = function (...args) {
  return Math.sin(args[0]);
};

ScientificCalculator.prototype.cos =  function(...args){
  return Math.cos(args[0])
}

module.exports =  ScientificCalculator;
