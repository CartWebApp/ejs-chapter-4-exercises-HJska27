function reverseArray(arr) {
  let reverseArray = [];
  
  // [ A, B , C]
  //   0  1   2

  // i=2 [C]
  // i=1 [C, B]
  // i=0 [C, B, A]
  for(let i = arr.length -1; i >=0; i--){
    reverseArray.push(arr[i]);
  }
return reverseArray
}

function reverseArrayInPlace(arr) {
  // [1,2,3,4,5] start array
  //  ^       ^
  //  0       4
  // [5,2,3,4,1] iteration 1
  //    ^   ^
  //    1   3  
  // [5,4,3,2,1] iteration 2 / end
  for(let i = 0; i < Math.floor(arr.length / 2); i++){
    let tempVal = arr[i];
    arr[i] = arr[arr.length - 1 -i]
    arr[arr.length - 1 - i] = tempVal;
  }
  return arr
}






// tests 
console.log(reverseArray(["A", "B", "D"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]