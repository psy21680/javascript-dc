'use strict';

// Array

// 1. Declaration
const arr1 = new Array();  // 방법1
const arr2 = [1,2];        // 방법2

//2. Index position 배열에 접근하는 방법
const fruits = ['사과','바나나'];
console.log(fruits);           // 배열 출력
console.log(fruits.length)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length-1]); // 배열의 마지막 값 출력하는 방법

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
}

// c. forEach
// forEach는 함수를 인자로 받아온다
fruits.forEach(function (fruit, index) {
    console.log(fruit, index);
});      // fruit안에 있는 forEach() 라는 API 사용

// 4. Addition, deletion, copy 
// 배열에 data 넣기, 빼기, 복사하기

// push : add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);

// pop : remove an item from the end
fruits.pop('딸기','복숭아');
console.log(fruits);

