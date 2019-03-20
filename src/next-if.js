(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var FUNC = 'function';

  nx.if = function(inCondition, inTruthy, inFalsy) {
    var callback =
      typeof inCondition === FUNC
        ? inCondition
        : function() {
            return inCondition;
          };
    return callback() ? inTruthy : inFalsy;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.if;
  }
})();
