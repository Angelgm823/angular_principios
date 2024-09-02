function addNumbers(a: number, b: number){

    return a +b;
}

const sddNumbersArrow = (a: number, b: number) => {  // funcion de flecha
    return a+b;
}

function multiply(primerNumero: number, segundoNumero?: number, base: number = 4){
    return primerNumero * base;
}

const result: number = sddNumbersArrow(23,34);
const result2: number = addNumbers(23,3);
const result3: number = multiply(3);

console.log({result, result2, result3});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number) => {

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 10,
    showHp(){
        console.log(`puntos de vida ${this.hp}`);
        
    }
}

healCharacter(strider, 20);

strider.showHp();

export{};