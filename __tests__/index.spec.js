(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.if should worked', function () {
      var obj1 = { name: 'fei' };
      var res1 = nx.if(obj1.name === 'fei', 'yes', 'no');
      expect(res1).toBe('yes');
    });
  });
})();
