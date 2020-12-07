console.log('hello ts');

//ts 编译 js 
var oBname:string = "i am boruto";

var str:any = "woshi";

//元组类型（tuple）数组的一种
let arr:[number, string, boolean] = [123, "st", false];

//枚举类型
enum Flag {
    success = 1,
    error = -1
}
console.log('success:' + Flag.success);
console.log('error:' + Flag.error);

//ts中定义类

class Person {

    name:string;

    constructor(n:string) {
        this.name = n;
    }

    run():void {
        alert(this.name + ' running');
    }
}

var instance = new Person('wilson');
instance.run();


// ts中实现继承 extends\super

class Son extends Person {
    constructor(name:string) {
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
    protected name:string = 'wilson';
    constructor(name:string) {
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
    name:string = 'static fun';
    constructor(name:string) {
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
    constructor(name:string) {
        super(name)
    }
}

