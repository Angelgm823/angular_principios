
//decoradores

function classDecorator<T extends {new(...args:any[]): {}}>(    
    constructor: T
){
    return class extends constructor{
        newProperty = 'New property';
        hello = 'override';
    }
}


@classDecorator
export class superClass {
    public myPropety: string = 'sdas3432';

    print(){
        console.log('hola mundo');
        
    }
}

console.log(superClass);


const myClass = new superClass();
console.log(myClass);
