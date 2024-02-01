function reverseArray(arr) {
  let reverseArray = ["A", "B", "C"];
  reverseArray[0] = "C"
  reverseArray[1] = "B"
  reverseArray[2] = "A"
console.log(reverseArray)
}

function reverseArrayInPlace(arr) {
  // Add code.
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]