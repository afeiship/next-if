var nx = require('next-js-core2');
require('../src/next-if');

test('nx.if', function() {
  var obj1 = { name: 'fei' };
  var res1 = nx.if(obj1.name === 'fei', 'yes', 'no');
  expect(res1).toBe('yes');
});
