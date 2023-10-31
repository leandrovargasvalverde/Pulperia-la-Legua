export class Products {
    _id?: string;
    name: string;
    image: string;
    marca: string;
    description: string;
    price: number;

    constructor(name: string, image: string, marca: string, description: string, price: number) {
        this.name = name;
        this.image = image;
        this.marca = marca;
        this.description = description;
        this.price = price;
    }
}