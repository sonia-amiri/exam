let assert = require('chai').assert;

function sequenceSum (begin, end, step) {
  let array = [];

  for (let i = begin; i <= end; i += step) {
    array.push(i);
  }

  let result = array.reduce((a, b) => a + b);

  if (array[begin] > array[end]) {
    return 0;
  } else if (array[begin] <= 0) {
    return -1;
  } else {
    return result;
  }
}

describe('sequenceSum ', function () {
  it(' returns the sum of a sequence of 2,2,2 ', function () {
    sequenceSum(2, 2, 2);
    assert.strictEqual(sequenceSum(2, 2, 2), 2);
  });
  it('return the sum of a sequence of 2,6,2', function () {
    sequenceSum(2, 6, 2);
    assert.deepEqual(sequenceSum(2, 6, 2), 12);
  });
  it('return the sum of sequence of 1,5,1', function () {
    sequenceSum(1, 5, 1);
    assert.deepEqual(sequenceSum(1, 5, 1), 15);
  });
  it('return the sum of sequence of 1,5,3', function () {
    sequenceSum(1, 5, 3);
    assert.deepEqual(sequenceSum(1, 5, 3), 5);
  });
});

function reverseLetter (str) {
  let arr = str.split('');
  let result = arr.reverse();
  return result.join('');
}

describe('reverseLetter', function () {
  it('return the reverse string', function () {
    reverseLetter('krishan');
    assert.deepEqual(reverseLetter('krishan'), 'nahsirk');
  });
});
