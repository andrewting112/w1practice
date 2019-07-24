
const without = function(arr, exclude) {
  for (var i = 0; i < exclude.length; i++) {
    for (var a = 0; i < arr.length; i++) {
      if (arr[a] === exclude[a]) {
        arr.splice(a,1);
      }
    }
  } return arr
}










console.log(without(["hello", "world", "lighthouse"], ["lighthouse"]));
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]