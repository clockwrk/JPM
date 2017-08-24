module.exports =  withExponents;

var withExponents = function(){}

withExponents.prototype.pow = function (...args) {

  console.log(...args);
  return Math.pow(...args);
};

withExponents.prototype.multiplyExp = function () {

};

withExponents.prototype.divideExp = function () {

};

console.log('Loading this')
