/*!
 * name: @jswork/next-if
 * description: If condition for next.
 * homepage: https://github.com/afeiship/next-if
 * version: 1.0.0
 * date: 2021-03-18 15:24:11
 * license: MIT
 */

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
