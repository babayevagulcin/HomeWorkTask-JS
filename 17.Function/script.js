// 1.Return the First Element in an Array.
let firstArr = [1, 2, 3];
let secondArr = [80, 5, 100];
let thirdArr = [-500, 0, 50];
function getFirstValue(arr) {
  return arr[0];
}
console.log(getFirstValue(firstArr));
console.log(getFirstValue(secondArr));
console.log(getFirstValue(thirdArr));

// 2.Return the Last Element in an Array.
const firstLastArr = [1, 2, 3];
const secondLastArr = ["cat", "dog", "duck"];
const thirdLastArr = [true, false, true];
function getLastItem(arr) {
  return arr[arr.length - 1];
}
console.log(getLastItem(firstLastArr));
console.log(getLastItem(secondLastArr));
console.log(getLastItem(thirdLastArr));

// 3.Find the Index
// const firstFindIndex = ["hi", "edabit", "fgh", "abc"];
// const secondFindIndex = ["Red", "blue", "Blue", "Green"];
// const thirdFindIndex = ["a", "g", "y", "d"];
// const fourthFindIndex = ["Pineapple", "Orange", "Grape", "Apple"];

// function getFindIndex(arr,str) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === str) {
//       return i;
//     } 
//   }
// }
// console.log(getFindIndex(firstFindIndex));
// console.log(getFindIndex(secondFindIndex));
// console.log(getFindIndex(thirdFindIndex));
// console.log(getFindIndex(fourthFindIndex));

// 4.Return the Sum of Two Numbers.
function addition(a, b) {
  return a + b;
}
console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));

// 5.Less Than 100?
const lessThan100 = (a, b) => a + b < 100;
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));
console.log(lessThan100(3, 77));

// 6
firstBox = {
  width: 2,
  length: 5,
  height: 1,
};

secondBox = {
  width: 4,
  length: 2,
  height: 2,
};

thirdBox = {
  width: 2,
  length: 3,
  height: 5,
};
function volumeOfBox(arr) {
  return arr.width * arr.length * arr.height;
}
console.log(volumeOfBox(firstBox));
console.log(volumeOfBox(secondBox));
console.log(volumeOfBox(thirdBox));

// 7
let total=0
function points(twoPointers, threePointers){
  const twoPointerMul=twoPointers*2
  const threePointerMul=threePointers*3
  total=twoPointerMul+threePointerMul
  return total;
}
console.log(points(1, 1));
console.log(points(7, 5));
console.log(points(38, 8));

// 8
const arr5 = [
      {
          name: 'my name',
          surname: 'my surname',
          city: 'my city'
      },
      {
          name: 'my name',
          surname: 'my surname',
          city: 'my city'
      },
      {
          name: 'my name',
          surname: 'my surname',
          city: 'my city'
      }
  ]
  function fillInfo(arr){
    for (let item of arr) {
      item.name = "Gulchin";
      item.surname = "Babayeva";
      item.city = "Ganja";
      }
  }
  
fillInfo(arr5);

console.log(arr5);