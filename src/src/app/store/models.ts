export class Category {
    constructor(public Id: number, public Name: String, public Image: String, public slug: String) {}
}

export class ProductCart {
    constructor( public quantity: Number, public product ) {}
}

export class Cart {
    public cartId: Number;    

    constructor(public products: ProductCart[] ) {}

}