export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'angel',
}
const passenger2: Passenger = {
    name: 'aaron',
    children:['natalia'],
}

const printChildren = (passanger: Passenger) => {
    const howManyChildren = passanger.children?.length || 0;

    console.log(passanger.name, howManyChildren);
    
}

printChildren(passenger1);