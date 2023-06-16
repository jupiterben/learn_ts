

function enumerable(value: boolean): MethodDecorator {
    console.log("enumerable")
    return function (target: any, proKey: string | Symbol, descriptor: PropertyDescriptor) {
        console.log(target);
        descriptor.enumerable = value;
    }
}

class Greeter {
    constructor(private greeting: string) { }

    @enumerable(false)
    greet() {
        return "Hello" + this.greeting;
    }
}

const g = new Greeter("world");`