
type Constructor = { new(...args: any[]): {} }
// 类装饰器  在运行时作为函数被调用 所有表达式为
// 输入参数为类的构造函数 输出新的构造函数
function clsDeco1<T extends Constructor>(constructor: T) {
    console.log("call clsDeco1")
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
function clsDeco2<T>(constructor: T) {
    console.log("call clsDeco2")
}

@clsDeco1 @clsDeco2
class A {
    hello:string;
    constructor() {
        console.log("call A constructor")
        this.hello = "world"
    }
}


const a = new A();
console.log(a)


// 属性装饰器
// 对于静态成员来说是类的构造函数 对于实例成员是类的原型对象
// 第一个参数是类的原型对象 第二个参数是成员的名字
// 返回值为undefined