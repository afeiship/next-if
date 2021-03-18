(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
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
