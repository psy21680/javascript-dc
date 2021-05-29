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
fruits.pop();
fruits.pop();
console.log(fruits);


// unshift: add an item to the benigging
fruits.unshift('레몬','유자');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// 이유 : 앞에 data를 넣으려면 기존에 있는 data 전체를 한칸씩 움직여야 되기 때문

// splice: remove an item by index position
fruits.push('단팥빵','소보루빵');
console.log(fruits);
fruits.splice(2,1); // (인덱스번호, 갯수) splice API는 인덱스 번호로부터 몇개를 지울건지 가능하게 해준다
console.log(fruits);
fruits.splice(2,1,'크로아상','식빵'); // (인덱스번호,갯수,지운곳에서 추가할 아이들)
console.log(fruits);

// combine two arrays
const fruits2 = ['망고','코코넛'];
const newFruits = fruits.concat(fruits2);  // concat은 붙여진 배열을 return해준다
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.log(fruits.indexOf('크로아상')); // indexOf API 사용 //2
console.log(fruits.indexOf('연유빵')); // 배열안에 해당하는 값이 없을 때는 -1 출력

// includes
console.log(fruits.includes('식빵')); // 배열값 존재여부 확인 -> true,false로 리턴 //true

// lastIndexOf
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));     // 0 첫번째꺼 출력
console.log(fruits.lastIndexOf('사과'));   // 4 마지막꺼 출력