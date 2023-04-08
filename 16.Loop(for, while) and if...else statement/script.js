// 1.Convert Age to Days
function calcAge(age) {
  return age * 365;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));

//1.Loop text


// 3.Sum of even numbers(e.g: 2,4,6...) in 10.

let sum = 0;
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`sum: ${sum}`);

// 4.Multiply the odd numbers(e.g: 1,3,5...) in 17.

let multiply = 1;
for (let a = 1; a < 17; a++) {
  if (a % 2 === 1) {
    multiply *= a;
  }
}
console.log(`multiply: ${multiply}`);

// 4.Multiply numbers between 10 and 18.
let multiply1 = 1;
for (b = 10; b < 19; b++) {
  multiply1 *= b;
}
console.log(`multiply: ${multiply1}`);

// 5.Sum numbers between 17 and 30. Except 19, 20.

let sum1 = 0;
for (let j = 17; j <= 30; j++) {
  if (j === 19) {
    continue;
  }
  if (j === 20) {
    continue;
  }
  sum1 += j;
}
console.log(`sum: ${sum1}`);

// 6.Sum of even numbers and assign this result a variable.
// Sum of odd numbers and assign this result a variable.
let evenNum = 0;
let even=0
while (even<=30){
  if(even % 2 === 0){
    evenNum += even;
  }
  even++;
}
console.log(`Sum of even numbers ${evenNum}`);

let oddNum = 0;
let odd=0
while (odd<=30){
  if(odd % 2 === 1){
    oddNum += odd;
  }
  odd++;
}
console.log(`Sum of odd numbers ${oddNum}`);
console.log(`Difference between even and odd numbers ${evenNum-oddNum}`);


  // 7.Find of even numbers(e.g: 2,4,6...) in 16. And every number to the power of 2.
  for (let c = 1; c < 17; c++) {
    if (c % 2 === 0) console.log(`even number**2:  ${c ** 2}`);
  }
