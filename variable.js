//1. Use strict
//added in ES 5
//use this for Valina Javascript
'use strict';


//2.Variable , rw(read,write)
// let (added in ES6)
let globalName='grobal name';  // global scope은 어플리케이션이 실행되는 시작부터 끝까지 메모리에 탑재되어있기 때문에 최소한으로 쓰는것이 좋다
{
let name='ellie';
console.log(name); // ellie
name='hello';
console.log(name); // hello
console.log(grobalName); //global name
}                                      // block 밖에서는 block안의 내용을 보지 못한다 , block 안에서는 밖의 내용 볼 수 있음
console.log(name);    // 아무것도 표시되지 않음
console.log(globalName);  //global name



// var (don't ever use this!)
// var hoisting (move declaration from bottom to top:어디에 선언했는지에 상관없이 항상 제일위로 선언을 끌어올려 주는 것)
// has no block scope

{
    age=4;
    var age;
    }
    console.log(age) // 4



//3.constant , r(read only)
//favor immutable data type always for a few reasons
//use const whenever possible
//only use let if variable need to change
//1.security
//2.thread safty
//3.reduce human mistakes



const daysInWeek=7;
const maxNumber=5;


//4.data types
//priimitive, single item : number,string,boolean,null,undefined,symbol
//object,box container
//function, first-class function ( js에서는 function도 변수에 할당이 가능하고, 함수의 인자로도 전달가능 하며 return 값으로도 설정가능 )

// number
const count=17;
const size =17.1;
console.log(`value:${count},type:${typeof count}`);
console.log(`value:${size},type:${typeof size}`);

// number - special numeric value : Infinty,-Infinity,NaN
const infinity=1/0;
const negativeInfinity=-1/0;
const nAn='not a number'/2
console.log(infinity);        //Infinty
console.log(negativeInfinity);  //-Infinity
console.log(nAn);               //NaN


//bigInt (fairy new , don't use it yet)
const bigInt=123314324232352352343413n // 숫자 맨 끝에 n을 붙이면 bigint data type으로 인식 number이 아니고
console.log(`value:${bigInt},type:${typeof bigInt}`);

//string
const char='c';
const brendan='brendan';
const greeting='hello'+brendan;
console.log(`value:$greeting},type:${typeof greeting}`);
const helloBob=`hi${brendan}!`;  //template literal(template string) = 백틱기호를 이용해 ${변수}의 값이 자동적으로 붙여져서 편하게 출력가능하다(+와''기호 일일히적어주기 귀찮으니까 - 1억개라면,, 생각해보기)
console.log(`value:${helloBob},type:${typeof helloBob}`);


//boolean
//false:o,null,undefined,NaN,''
//true:any other value
const canRead=true;
const test=3<1;
console.log(`value:${canRead},type:${typeof canRead}`);
console.log(`value:${test},type:${typeof test}`)


//null 비었다는 뜻
let nothing=null;
console.log(`value:${nothing},type:${typeof nothing}`);


//undefined 비었는지 값이 있는지도 모르는 상태 -> let x; 처럼 변수에 아무런 값 할당하지 않았을 때도 undefined
let x=undefined;
console.log(`value:${x},type:${typeof x}`);

//symbol, crate unique identifiers for object
// 이건 아직 이해못한 걸로 ,,

//object , real-life object, data structure

//Note !!
//immutable data types : frozen objects (i.e. object.freeze())
//mutable data types : all object by default are mutable in JS

const ellie={name:'ellie',age:20};
ellie.age=21;

//dynamic typing : dynamically typed language
//js는 선언시 어떤 타입인지 안적고 런타임(프로그램 동작시)때 type이 결정된다 -> 이떄문에 런타임 에러가 빈번히 발생하게 되면서 자바스크립트에 타입을 적기로한 typescript가 출시되었다 (근데 TS는 브라우저가 이해할수있는 JS로 바꿔야 해서 BABEL을 사용하여야 한다)
let text='hello';
console.log(text.charAt(0));  //h
console.log(`value:${text},type:${typeof text}`);
text=1;
console.log(`value:${text},type:${typeof text}`);
text='7'+5; //5를 문자로 인식
console.log(`value:${text},type:${typeof text}`);
text='8'/'2'; // 나눗셈 기호 때문에 숫자로 인식
console.log(`value:${text},type:${typeof text}`);
console.log(text.charAt(0)); // error