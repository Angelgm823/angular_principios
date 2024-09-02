

interface Chaacter{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


const strider: Chaacter ={
    name: 'angel',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

strider.hometown = 'Los angeles'
console.table(strider);

export{}; // modulos exportados