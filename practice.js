// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  for (var i = 0; i < actual.length; ++i) {
    if (actual[i] !== expected[i]) {
      console.log("🚫Assertion Failed: " + [actual] + " !== " + [expected]);
    }
  }
    console.log("✅Assertion Passed: " + [actual] + " === " + [expected]);
}




assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual(["1", "2", "3"], [1, "2", "3"])
assertArraysEqual(["1", "2", "3"], ["1", "2", 3])