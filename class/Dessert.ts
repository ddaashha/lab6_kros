import { Product } from './Product';

export class Dessert extends Product {
    constructor(
        id: number,
        name: string,
        price: number,
        private calories: number,
        private containsGluten: boolean,
        imageUrl: string = 'assets/default-dessert.png'
    ) {
        super(id, name, price, 'dessert', imageUrl);
    }

    getDetails(): string[] {
        return [
            `Калорійність: ${this.calories} ккал`,
            `Містить глютен: ${this.containsGluten ? 'Так' : 'Ні'}`
        ];
    }

    getCategory(): string {
        return 'Десерти';
    }

    getCalories(): number {
        return this.calories;
    }

    isGlutenFree(): boolean {
        return !this.containsGluten;
    }
}