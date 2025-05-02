import { Product } from './Product';

export class Drink extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        private volume: number, // в мл
        private isAlcoholic: boolean,
        imageUrl: string = 'assets/default-drink.png'
    ) {
        super(id, name, price, 'drink', imageUrl);
    }

    getDetails(): string[] {
        return [
            `Об'єм: ${this.volume} мл`,
            `Алкогольний: ${this.isAlcoholic ? 'Так' : 'Ні'}`
        ];
    }

    getCategory(): string {
        return 'Напої';
    }

    getVolume(): number {
        return this.volume;
    }

    containsAlcohol(): boolean {
        return this.isAlcoholic;
    }
}