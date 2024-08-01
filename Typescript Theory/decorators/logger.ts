
function logger(target: any, property: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(property);
    console.log(descriptor);
}

class Test {
    @logger
    public test() {
        console.log('test');
    }
}

const test = new Test();