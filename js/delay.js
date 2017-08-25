function delay() {

  return new Promise(function(resolve, reject){

    setTimeout(resolve, 1);
  })
}


module.exports = delay;
