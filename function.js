//Function
//fundamental building blick in the program 
//subprogram can be used multiplt times , 프로그램안에서 각각의 작은단위의 기능들을 수행하는 subprogam, 재사용 가능
//performs a task or calculate a value 

//1. Function name(param1,param2) {body ... return; }
//one function === one thing , 하나의 함수는 한가지의 일만
//naming: doSomething,command,verb 함수는 동작하는 것이기때문에 동사형태로
//e.g createCardAndPoint -> createCard, createPoint
//function is object in JS 
function printHello(){
    console.log('Hello');
}
printHello();      //함수 호출

function log(message){
    console.log(message);
}
log('Hello@');

//2. Parameters
//primitive parameters : passed by value
//object parameters : passed by reference
function changeName(obj){
    obj.name='coder';
}
const ellie={name:'ellie'};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6)
function showMessage(message,from='unknown'){     // (사용자가 parameter를 전달하지 않을 시 )prameter값에다가 원하는 디폴트값을 명시
//    if(from === undefined){
//        from ='unknown';
//    }                           // 이부분을 안적어주어도 됨
    console.log(`${message} by ${from}`);
}
showMessage('Hi');

//4. Rest parameters (added in ES6)
function printAll(...args){           // 배열의 형태로 받아오는 방법
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
    for(const arg of args){    // 배열에 있는 아이들을 순서대로 출력해줌
        console.log(arg);
    }
}
printAll('dream','coding','ellie');

// 5. Local scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다 ( 틴트를 입힌 유리창 )
let globalMessage = 'global'; //global variable
function printMessage(){
    let message='hello';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage='hello';
    }
    console.log(childMessage);   //error   //중첩된 함수에서 자식의함수가 부모함수에 정의된 변수에 접근이 가능한 것들이 컬져 - 나중에 배움
}

//6. Return a value
function sum(a,b){
    return a+b;
}
const result=sum(1,2); //3
console.log(`sum:${sum(1,2)}`);


//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic ...
    }
}


//good
// 조건이 맞지 않을 때는 빨리 return 해서 함수를 종료
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic  ...
}

//First-class function
//function are treated like any other variable
//can be assignde as a value to variable 변수에 할당가능
//can be passed as an argument to other functions. 인자로 전달가능
//can be returned by another function 리턴값 가능

//1. Function expression
//a function declaration can be called earlier than it is defined (hoisted - js 엔진이 선언을 제일 위로 올려줌) : 함수선언식
//a function expression is created when the execution reaches it. : 함수표현식
const print=function(){   // 함수를 선언함과 동시에 변수를 할당 , 표현식 // 함수에 이름이 없는 것을 anonymous function // 원한다면 function print() 일케 적어줘도됨 - named function
    console.log('print');
};
print();     // 변수를 함수호출하는 것처럼 부르면 됨
const printAgain=print;
printAgain();
const sumAgain=sum;
console.log(sumAgain(1,3));


//2.Call back function using function expression
function randomQuiz(answer,printYes,printNo){  // callback function: 다른 함수의 인자로써 이용되는 함수
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}
//anonymous function
const printYes=function(){
    console.log('yes!');
};
//named function
//better debugging in debugger's stack traces
//recursion
const printNo=function print(){
    console.log('no!');
    //print(); // 여기 이렇게 적어주면 함수 안에서 함수 자신 스스로를 부르는 것을 리컬젼이라고 함
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

//Arrow function
//always anonymous
const simplePrint=function(){
    console.log('simplePrint!');
};
//const simplePrint = () => console.log('simplePrint!');

const add = function (a,b) {
    return a+b;
};
//const add = (a,b) => a+b;

const simpleMultiply = (a,b) => {
    //do something more
    return a * b;
};

//IIFE : Immediately Invoked Function Expression  
//선언함과 동시에 바로 호출
(function hello(){
    console.log('IIFE');
}) ();