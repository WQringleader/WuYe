"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
