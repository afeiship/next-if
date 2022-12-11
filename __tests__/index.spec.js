(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.if has true/falsy value', function () {
      var obj1 = { name: 'fei' };
      var res1 = nx.if(obj1.name === 'fei', 'yes', 'no');
      expect(res1).toBe('yes');
    });

    test('nx.if if only 2 args', () => {
      var v1 = true;
      var res1 = 'res1-value';
      expect(nx.if(v1, res1)).toBe(res1);
    });
  });
})();
