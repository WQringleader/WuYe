/**
 * hello ts 
 */

console.log('hello ts');

//ts 编译 js 
var oBname: string = "i am boruto";

var str: any = "woshi";

//元组类型（tuple）数组的一种
let arr: [number, string, boolean] = [123, "st", false];

//枚举类型
enum Flag {
    success = 1,
    error = -1
}
console.log('success:' + Flag.success);
console.log('error:' + Flag.error);

//ts中定义类

class Person {

    name: string;

    constructor(n: string) {
        this.name = n;
    }

    run(): void {
        alert(this.name + ' running');
    }
}

var instance = new Person('wilson');
instance.run();


// ts中实现继承 extends\super

class Son extends Person {
    constructor(name: string) {
        super(name);
    }
}
var instacne2 = new Son('curry');
instacne2.run();


//类里面的修饰符 

/*
 * typescript里面定义属性的时候提供了三种修饰符
 * 
 * public: 公有 在类里面、子类、类外面都可以访问
 * protected: 保护类型 在类里面、子类里面可以访问，在类外面不能访问
 * private: 私有 在类里面可以访问 子类、类外部都不能访问
 * 
 * 如果不加修饰符，默认为公有（public）
 */

class Parent {
    protected name: string = 'wilson';
    constructor(name: string) {
        this.name = name;
    }
    run() {
        console.log(this.name + ' p running');
    }
}
var p = new Parent('venciki');
class Child extends Parent {
    constructor(name: string) {
        super(name);
    }
    work() {
        console.log(`${this.name}`);
    }
}
var child = new Child('child');

//静态属性/方法

class Dfunction {
    name: string = 'static fun';
    constructor(name: string) {
        this.name = name;
    }
    run() { //实例方法
        console.log(this.name)
    }

    static work() { //静态方法
        console.log('jingtai fangfa')
        //console.log(this.name);//undefined 静态方法中无法访问类中的属性
    }
}

class Jfunction extends Dfunction {
    constructor(name: string) {
        super(name)
    }
}

/**
 *  多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现 
 *  多态属于继承
 */

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log('吃的方法');
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        return this.name + '吃肉';
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        return this.name + '吃老鼠';
    }
}

/**
 * 抽象类
 * typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
 * 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 * 抽象类和抽象方法用来定义标准，标准：Anmial这个类要求它的子类必须包含eat方法
 */

abstract class Fruit {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    // abstract抽象方法只能放在抽象类里面
    abstract say(): any; // 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
    jump() {
        console.log('子类中必须实现抽象方法，其他方法可以不实现');
    }
}

// var fruit = new Fruit(); // error 抽象类不能直接被实例化

class Apple extends Fruit {
    constructor(name: string) {
        super(name);
    }
    // 抽象类的子类必须实验抽象类里面的抽象方法
    say() {
        console.log(this.name + 'i am apple');
    }
}
var apple = new Apple('红色');
apple.say();

/**
 * 接口：行为和动作的规范，对批量方法进行约束
 * interface 
 */

interface FullName {
    firstName: string; //注意以';'结束
    lastName: string;
}

function printName(name: FullName) {
    console.log(name.firstName + '≈' + name.lastName);
}

printName({
    firstName: 'venciki',
    lastName: 'wilson',
}); // 这样传必须得和接口中的属性一致，不能多也不能少

// 可以利用下面新定义对象传输
var obj = {
    firstName: 'venciki',
    lastName: 'wilson',
    age: 18,
    sex: 'male'
}

printName(obj);

interface PersonInfo {
    name: string;
    sex: string;
    age: number;
    height?: number;
}

function getInfo(info: PersonInfo) {
    console.log(info.name + ' ' + info.sex + ' ' + info.age);
}

function getPersonAge(info: PersonInfo) {
    console.log(info.age);
}

getInfo({
    name: 'wilson',
    sex: 'male',
    age: 18,
})

var info = {
    name: 'lisi',
    sex: 'female',
    age: 19,
    height: 175,
    weight: 60
}

getPersonAge(info);

interface Config {
    type: string;
    url: string;
    data?: string;
    dataType?: string;
}

function ajax(config: Config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.onreadystatechange = function() {
        if (xhr.status === 200 && xhr.readyState === 4) {
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            } else {
                console.log(xhr.responseText);
            }
        }
    }
    xhr.send();
}

ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});

/**
 * 函数类型接口：对函数的参数和返回值进行约束 
 */

interface unifiedFormat {
    (key: string, value: string):string;
}

var fun: unifiedFormat = function (key: string, value: string): string {
    return key + value;
}

console.log(fun('num', '123'));

/**
 * 可索引接口：数组、对象的约束
 */

// ts定义数组的方式
var interArr: number[] = [123, 123];
// 数组
interface UserArr {
    [index: number]: string;
}

var testArr: UserArr = ['aaa', 'bbb', 'ccc', 'ddd'];
// 对象
interface UserObj {
    [index: string]: string;
}

var testObj: UserObj = {
    name: 'wilson',
    length: '175'
}

/**
 * 类类型接口:  
 */

interface Snack {
    name: string;
    eat(str: string):void;
}

class XiaoMing implements Snack {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    eat() {
        console.log(this.name + '吃零食');
    }
}

var xiao = new XiaoMing('xiaoming');
xiao.eat();

/**
 * 接口扩展，接口可以继承借口 
 */

interface Mother {
    work(): void;
}

interface Daughter extends Mother {
    sleep(): void;
}

class Programer {
    name: string;
    constructor(name: string) {
        this.name = name;
    };
    coding (message: string) {
        console.log(this.name + ' code ' + message);
    };
}

class DoWhat extends Programer implements Daughter {
    constructor(name: string) {
        super(name);
    };
    sleep() {
        console.log('女儿睡觉');
    };
    work() {
        console.log('母亲睡觉');
    };
    //在类中实现接口不仅要实现调用的接口还要是要这个接口继承的接口
}

var a = new DoWhat('women');

a.coding('womenqudacaoyuandehubian');


/**
 * 泛型: 可以支持不特定的数据类型
 */

// 泛型函数
// T表示泛型，具体什么类型是调用这个方法的时候决定的。
function getData<T>(value: T): T { 
    return value;
}
// 这里调用函数的时候传入了number那么参数返回值就都是number。
getData<number>(123);
getData<string>('test');

// 可以让返回值的类型和参入参数的类型不一致
function getMessage<T>(value:T): any {
    // return '123'
}

/**
 * 泛型类 
 */

// 基本类
class findMin {
    public list: number[] = [];
    add (num: number) {
        this.list.push(num);
    };
    min (): number {
        var minNum = this.list[0];
        for(var i = 0; i < this.list.length; i++) {
            if (this.list[i] < minNum) {
                minNum = this.list[i]
            }
        }
        return minNum;
    };
}

var b = new findMin();
b.add(22);
b.add(13);
b.add(9);
b.add(123);

console.log('minNum=' + b.min());

// 泛型类
class findMax<T> {
    public list: T[] = [];
    add (num: T) {
        this.list.push(num);
    };
    max (): T {
        var maxNum = this.list[0];
        for(var i = 0; i < this.list.length; i++) {
            if (this.list[i] > maxNum) {
                maxNum = this.list[i]
            }
        }
        return maxNum;
    };
}
var m = new findMax<number>();
m.add(15);
m.add(1);
m.add(22);
m.add(4);
console.log('maxNum=' + m.max());
var mt = new findMax<string>();
mt.add('b');
mt.add('g');
mt.add('q');
mt.add('a');
console.log('maxNum2=' + mt.max());

/**
 * 泛型接口
 */

// 1
interface RightSpace {
    <T>(Value: T): T;
}
var rightle: RightSpace = function<T>(value: T): T {
    return value;
}
console.log(rightle<string>('light'));

// 2
interface LeftSpace<T> {
    (value: T): T;
}
function leftle<T>(value: T): T {
    return value;
}
var myLeft: LeftSpace<string> = leftle;
console.log(myLeft('lifit'));


/**
 * practice
 */

class User {
    username: string | undefined;
    password: string | undefined;
}
class Base<T>{
    add(info: T): boolean {
        console.log(info);
        return true;
    }
}
var use = new User();
use.username = 'wilson';
use.password = '******';

var bas = new Base<User>();
bas.add(use);
