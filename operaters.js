//1. String concatenation
console.log('my'+'cat');
console.log('1'+2); //12
console.log(`string literals : 1+2=${1+2}`);


//2. Numeric perators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //devide
console.log(1*1); //multiply
console.log(5%2); //remainder
console.log(2**3);  //exponentiation


//3. increment and decrement operation
let counter=2;
const perIncrement=++counter;
//counter=counter+1;
//preIncrement=counter;
console.log(`preIncrement:${preIncrement},counter:${counter} `);


const postIncrement=counter++;
//postIncrement=counter;
//counter=counter+1;


//4.Assingn operaters
let x=3;
let y=6;
x+=y; //x=x+y;
x-=y;
x*=y;
x/=y;


//5. Comparison operators 비교연산자
console.log(10<6);
console.log(10<=6);
console.log(10>6);
console.log(10>=6);


//6. Logical operators : ||(or) &&(and) !(not)
//||(or) , find the first truthy value
const value1=true;
const value2=false;
console.log(`or:${value1||value2||check()}`);

//&&(and), find the first falsy value
console.log(`and:${value1&&value2&&check()}`);

//and -> 간편하게 null check 할 때에도 많이 쓰인다
//often used to compress ling if - statement
//nullableObject && nullableObject.something //nullableObject가 null이면 false가 되기 때문에 뒤에가 실행안됨 - 굳이 something을 받아오지 않아도 이미 끝남
if(nullableObject != null){
    nullableObject.someting;
}

function check(){
    for(let i=0;i<10;i++){
        //wasting time
        console.log('이모티콘');
    }
    return true;
}

// (! not) 값을 반대로 바꿔주는 연산
console.log(!value);


//7. equality
const stringFive='5';
const numberFive=5;

// == loose equality , with type conversion
console.log(stringFive==numberFive); // true
console.log(stringFive!==numberFive);  // false

// === strict equality , no type conversion
console.log(stringFive ===numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference
const ellie1={name:'ellie'};
const ellie2={name:'ellie'};
const ellie3=ellie1;
console.log(ellie1==ellie2);  //f
console.log(ellie1===ellie2); //f
console.log(ellie1===ellie3); //t


//equality - puzzier
console.log(0==false); //t
console.log(0===false); //f
console.log(''==false); //t
console.log(''==false); //f
console.log(null=undefined); //t
console.log(null===undefined); //f


//8. if
//if , else if , else
const name='ellie';
if(name ==='ellie'){
    console.log('welcome.Ellie!');
}
else if(name==='coder'){
    console.log('You are amazing coder');
}
else{
    console.log('unkwnoun');
}


//9. Ternary operator -> ? if를 좀 더 간단히 한것 , but 가독성 땜시 너무많이 쓰면 ㅂㄹ
//condition? value1:value2;
console.log(name==='ellie'?'Yes':'No');    // true면 yes 그외이면 no


//10. switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
// if문에서 else if를 여러개 반복하게 생겼다면 switch를 사용하는 것이 좋고, 나중에 TS에서 정해져있는 타입을 검사사하거나 enum 비슷한 아이들을 검사할 땐 switch를 쓴느것이 가독성이 좋다

const browser='IE';
switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


//11. Loops
//while loop,while the condition is truthy
//body code is executed
let i=3;
while(i>0){
    console.log(`while:${i}`);
    i--;
}

//do while loop, body code is executed first
//then check the condition
// 블럭을 먼저 실행하고 싶다면 do while을 사용, 조건문이 맞을 때만 블럭을 실행하고 싶다면 while을 사용
do{
    console.log(`do while:${i}`);
    i--;
} 
while (i>0);


// for loop, for(begin;condition;step)
for(i=3;i>0;i--){
    console.log(`for:${i}`);
}
for(let i=3;i>0;i=i-2){
    //inline variable declaration
    console.log(`inline variable for:${i}`);
}

//nasted loops 중첩
//중첩문은 CPU에 안좋아서 되도록 피하도록 하자 (빅오(n^2))
for (let i=0;i<10;i++){
   for (let j=0;j<10;j++){
       console.log(`i:${i},j:${j}`);
   }
}


//break , continue
//break는 loop를 완전히 끝내는 것이고, continue는 지금꺼 스킵 후 다음꺼로 넘어가는 것

//Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i=0;i<=10;i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}

//Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i=0;i>=0;i++){
    if(i==9){
        break;
    }
    console.log(i);
}
