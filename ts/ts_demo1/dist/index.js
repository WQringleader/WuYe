"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello ts');
//ts 编译 js 
var oBname = "i am boruto";
var str = "woshi";
//元组类型（tuple）数组的一种
var arr = [123, "st", false];
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
console.log('success:' + Flag.success);
console.log('error:' + Flag.error);
//ts中定义类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        alert(this.name + ' running');
    };
    return Person;
}());
var instance = new Person('wilson');
instance.run();
// ts中实现继承 extends\super
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(name) {
        return _super.call(this, name) || this;
    }
    return Son;
}(Person));
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
var Parent = /** @class */ (function () {
    function Parent(name) {
        this.name = 'wilson';
        this.name = name;
    }
    Parent.prototype.run = function () {
        console.log(this.name + ' p running');
    };
    return Parent;
}());
var p = new Parent('venciki');
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(name) {
        return _super.call(this, name) || this;
    }
    Child.prototype.work = function () {
        console.log("" + this.name);
    };
    return Child;
}(Parent));
var child = new Child('child');
//静态属性/方法
var Dfunction = /** @class */ (function () {
    function Dfunction(name) {
        this.name = 'static fun';
        this.name = name;
    }
    Dfunction.prototype.run = function () {
        console.log(this.name);
    };
    Dfunction.work = function () {
        console.log('jingtai fangfa');
        //console.log(this.name);//undefined 静态方法中无法访问类中的属性
    };
    return Dfunction;
}());
var Jfunction = /** @class */ (function (_super) {
    __extends(Jfunction, _super);
    function Jfunction(name) {
        return _super.call(this, name) || this;
    }
    return Jfunction;
}(Dfunction));
/**
 *  多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
 *  多态属于继承
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃肉';
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        return this.name + '吃老鼠';
    };
    return Cat;
}(Animal));
/**
 * typescript中的抽象类：它是提供其他类继承的基类，不能直接被实例化。
 * 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
 * 抽象类和抽象方法用来定义标准，标准：Anmial这个类要求它的子类必须包含eat方法
 */
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.name = name;
    }
    Fruit.prototype.jump = function () {
        console.log('子类中必须实现抽象方法，其他方法可以不实现');
    };
    return Fruit;
}());
// var fruit = new Fruit(); // error 抽象类不能直接被实例化
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name) {
        return _super.call(this, name) || this;
    }
    // 抽象类的子类必须实验抽象类里面的抽象方法
    Apple.prototype.say = function () {
        console.log(this.name + 'i am apple');
    };
    return Apple;
}(Fruit));
var apple = new Apple('红色');
apple.say();
function printName(name) {
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
};
printName(obj);
function getInfo(info) {
    console.log(info.name + ' ' + info.sex + ' ' + info.age);
}
function getPersonAge(info) {
    console.log(info.age);
}
getInfo({
    name: 'wilson',
    sex: 'male',
    age: 18,
});
var info = {
    name: 'lisi',
    sex: 'female',
    age: 19,
    height: 175,
    weight: 60
};
getPersonAge(info);
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
    xhr.send();
}
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
