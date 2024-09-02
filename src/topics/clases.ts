export class Person{

    // public name: string;
    // public address: string;


    //metodo especial
    constructor(
        public firstName: string,
        public LastName: string,
        public address: string,
    ){}

}

//extenciones de clases
// export class Hero extends Person{
//     constructor(
//         public alerEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New york');
//     }
// }


export class  Hero{
    constructor(
        public alerEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        // super(realName, 'New york');
    }
}

const tony = new Person ( 'Ironman', 'stark' , 'CDMX');
const ironman = new Hero ( 'Ironman', 90 , 'CDMX', tony);


console.log(ironman);
