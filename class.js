'use strict';
//Object-oriented programing 객체지향
//class: template
//object: instance of a class
//JavaScript classes
// - introduced in ES6 , 클래스가 도입되기 전에는 클래스를 정의하지 않고 바로 object를 만들 수 있었음 , 또 function을 이용해 붕어빵틀을 만드는 기능이 존재
// - syntactical sugar over prototype-based inheritance 기존에 존재하던 프로토타입(이건아직 안배움,다음에)을 베이스로한 것에 기반하여 문법만 class가 추가되었다 (문법상으로 달달한 , 편리한)

//1. Class declarations
class Person{
    //constructor 생성자를 통해 필요한 data들을 전달받음
    constructor(name,age){ 
        //fields
        this.name=name; 
        this.age=age;
    }

    //methods
    speak(){
        console.log(`${this.name}:hello!`) // 여기서 this는 나중에 생성될 object를 말함
    }
}

// 새로운 object를 만들 때에는 new라는 키워드 사용
const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters  
class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0? 0:value;
    }
}

const user1 = new User('stive','Job',-1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon ! 최근에 추가된 내용
class Experiment{
    publicField = 2;
    #privateField = 0;  //class 내부에서만 값이 읽기,변경가능
}
const experiment = new Experiment();
console.log(experiment.publicField);   //2
console.log(experiment.privateField);  // undefined

// 4. Static properties and methods
// Too soon ! 최근에 추가된 내용
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article.publisher); // undefined
console.log(Article.publisher);  //Dream Coding
Article.printPublisher();      //Dream Coding


// 5. Inheritance 상속
// a way for one class to extend another class
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{}     // extend라는 키워드를 통해 Shape 연장 - Shape 에서 정의한 필드와 메소드가 자동적으로 Rectangle에 포함
class Triangle extends Shape{
    //함수를 재정의 = 오버라이딩(덮어쓰기=다양성)
    getArea(){
        return (this.width * this.height) / 2;
    }
    draw(){
        super.draw();  // 부모의 함수도 호출되고 싶다면 super(부모)를 명시해줄 것
        console.log('^');
    }
    toString(){
        return `toString method를 overwriting ! `

    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 객체 지향 프로그래밍에서 인스턴스는 해당 클래스의 구조로 컴퓨터 저장공간에서 할당된 실체를 말한다
console.log(rectangle instanceof Rectangle); //t // rectangle 오브젝트가 Rectangle 클래스로 만들어진 아이인지 검사- T/F 로 출력됨
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t - Shape을 상속했기 때문에 맞음
console.log(triangle instanceof Object); // t - 우리가 js에서 만든 모든 object ,class들은 js에 있는 Object를 상속한것
console.log(triangle.toString());

