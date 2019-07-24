const middle = function(arr)
{
  if(arr.length <= 2){
    return [];
  }
  else if(arr.length % 2 === 0){
    var middle = [arr[(arr.length)/2 -1], arr[(arr.length/2)]];
    return middle;
  }
  else{
    var oddMiddle = [Math.floor((arr.length)/2) +1];
    return oddMiddle;
  }
}




console.log(middle([1]))
console.log(middle([1, 2]))
console.log(middle([1, 2, 3])) 
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1, 2, 3, 4]))
console.log(middle([1, 2, 3, 4, 5, 6]))