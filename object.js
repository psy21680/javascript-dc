// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object= { key : value };

// 1.Literals and properties
const obj1 = {};  // 'object literal' syntax  class 없이 object를 바로 사용하는 방법
const obj2 = new Object(); //'object constructor' symtax class 라는 template를 사용하여 object를 생성하는 방법

function print(person){            // 함수에서 인자로 전달받아야 할게 많으면 묶어서 object로 전달받으면 편리하다 -> 더불어 관리과 묶어서 logical 하게 생각할 수 있다
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age:4 };
print(ellie);


// with JavaScript magig (dynamically typed language)
// can add properties later
// 뒤늦게 하나의 property 추가가능 -> 하지만 유지보수 어렵고 생각지도 못한 에러의 발생가능성이 높으므로 가능하면 피할 것 !
ellie.hasJob = true;     
console.log(ellie.hasJob); // true


// can delete properties later
delete ellie.hasJob;      // 뒤늦게 property 삭제도 가능
console.log(ellie.hasJob);  //undefined

// 2.computed properties
// 객체의 프로퍼티 값을 받아오는 방법 2가지
// key should be always string
console.log(ellie.name);     // 첫번째방법(dot 문법)
console.log(ellie['name']);  // 두번째방법(배열의 형태로 받아오기)

// 두번째 방법을 사용해서도 -> 뒤늦게 하나의 property 추가가능
ellie['hasJob']=true;
console.log(ellie.hasJob);

// 그럼 어떤경우에 어떤 방법을 사용할까
// 방법1 - 우리가 key에 해당하는 값을 받아올 때
// 방법2 - 정확하게 어떤 key가 필요한 지 모를때 ( key가 실시간으로 런타임에서 결정될 때)

// key가 런타임에서 결정될 경우의 예
function printValue1(obj, key){  // 방법 1 사용
    console.log(obj.key);      // object에 key라는 프로퍼티는 들어있지 않기 때문에 undefined 출력
}
printValue1(ellie,'name');

function printValue2(obj, key){  // 방법 2 사용
    console.log(obj[key]);
}
printValue2(ellie,'name');

// 3. Property value shorthand
const person1 = { name:'bob'   , age:2 };
const person2 = { name:'steve', age:3 };
const person3 = { name:'dave', age:4 };
const person4 = makePerson('ellie',30);


function makePerson(name, age){       
    return{         // 함수 안에서 object를 만들어 return
        name:name,  // key 와 value의 이름이 동일하다면 -> name, 일케만 적어줘도 됨 
        age:age,    // = age,
    };
}
console.log(person4);

// 4. Constructor Function 오브젝트를 생성하는 함수
// 함수로 template 만들기 ( class 없었을때 이렇게 작성)
function Person(name,age){  // 오브젝트를 생성하는 함수들은 보통 대문자로 시작하도록 함수를 만든다
    this.name = name;
    this.age = age;
}                          
const person5 = new Person('ellie',30);  // class 에서 object를 만드는 것 처럼 !! new 붙여주기

// 5. in operator : property existence check (key in obj)
// object 안에 해당하는 key가 들어있는지 없는지 확인
console.log('name' in ellie); //true
console.log('age' in ellie); //true
console.log('random' in ellie); //false


// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 콘솔창 청소
for (key in ellie){     //오브젝트 안에있는 키들을 모두 출력시켜줌
    console.log(key);
}

// for (value of literable)
// 배열안에 있는 애들을 모두 출력시켜줌
const array = [1,2,4,5];         // 복잡
for (let i=0;i<array.length;i++){
    console.log(array[i]);
}
for (value of array){           // 간편
    console.log(value);
}

// 7. Fun clonning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name:'ellie', age:'20'};
const user2 = user;   // 이건 같은 refernce를 가지고 있기 때문에 같은 memory를 가리킴 
user2.name = 'coder';
console.log(user);

// object 복제하는 방법
// old way : 텅텅빈 공간을 만든 후 수동적으로 할당
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

//latest way : 텅텅빈 공간을 만든 후 assign 함수 사용
const user4 = {};
Object.assign(user4, user);   //(복사당할오브젝트, 복사할오브젝트)
//위의 두줄 -> const user4 = Object.assign({},user); 로 적어줘도 됨
console.log(user4);


// another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const mixed = Object.assign({},fruit1,fruit2);
console.log(mixed.color); // blue -> 앞에 동일한 프로퍼티가 있다면 값이 계속 덮어씌워지기 때문에 red가 아닌 blue가 출력
console.log(mixed.size);  // big