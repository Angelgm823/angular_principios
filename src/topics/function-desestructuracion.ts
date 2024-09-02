
 export interface Product{
    description: string;
    price: number;
}


const phome: Product = {
    description: 'Iphon 13 pro max',
    price: 1200.23
}

const tablet: Product = {
    description: 'iPad Air',
    price: 1234.56
}

interface TaxCalculationOpcions{
    tax: number,
    products: Product[];
}
                                                        //arreglo de numeros number[]
// function taxCalculation(options: TaxCalculationOpcions): number[]{
    export function taxCalculation(options: TaxCalculationOpcions): [number, number]{

    const {tax, products} = options;

    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total  * tax];
}


// const shopingCart = [phome, tablet];
// const tax = 0.15;

// const [total, taxTotal] = taxCalculation({
//     products: shopingCart,
//     tax: tax,
// });

// console.log('Total: ', total);
// console.log('Tax: ', taxTotal);


