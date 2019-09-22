import assert from 'assert';
import { double } from './math';

describe('lib/math', () => {
  describe('double', () => {
    const testCases = [
      {
        args: [ 1 ],
        expect: 2
      },
      {
        args: [ 2 ],
        expect: 4
      },
      {
        args: [ -1 ],
        expect: -2
      },
      {
        args: [ 0 ],
        expect: 0
      }
    ];

    it('正常系', () => {
      for (const testCase of testCases) {
        assert.strictEqual(double(testCase.args[0]), testCase.expect);
      }
    });
  });
});
