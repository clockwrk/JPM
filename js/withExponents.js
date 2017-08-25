
var withExponents = function(){
  this.pow = function (...args) {
    return Math.pow(...args);
  };

  this.multiplyExp = function (...args) {
    return this.multiply(this.pow(...args[0]),this.pow(...args[1]))
  };

  this.divideExp = function (...args) {
    return this.divide(this.pow(...args[0]),this.pow(...args[1]))
  };



}


module.exports =  withExponents;
console.log('Loading this')
