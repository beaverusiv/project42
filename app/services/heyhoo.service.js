'use strict';

class Heyhoo {
  getIteration(iteration) {
    if (iteration % 3 === 0 && iteration % 5 === 0) {
      return 'HeyHoo';
    }
    if (iteration % 3 === 0) {
      return 'Hey';
    }
    if (iteration % 5 === 0) {
      return 'Hoo';
    }
    return '>';
  }

  getOutput(iterations) {
    let output = '';
    for (let i = 1; i <= iterations; i++) {
      output += this.getIteration(i);
    }
    return { output, total: output.length };
  }
}

angular.module('myApp.heyhoo', [])

  .factory('HeyhooService', [function() {
    return new Heyhoo();
  }]);
