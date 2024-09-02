import {Product, taxCalculation} from './function-desestructuracion';


const shopingCart: Product[] = [{
    description: 'Nokia',
    price: 120,
},{
    description: 'Oppo',
    price: 234
}
];

const [total, tax] = taxCalculation({
    products: shopingCart,
    tax: 0.15,
});

console.log('Total: ', total);
console.log('Tax: ', tax);
