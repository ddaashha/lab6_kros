import { Product } from './Product';

export class Food extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    private cuisineType: string,
    private isVegetarian: boolean,
    imageUrl: string = 'assets/default-food.png'
  ) {
    super(id, name, price, 'food', imageUrl);
  }

  getDetails(): string[] {
    return [
      `Тип кухні: ${this.cuisineType}`,
      `Вегетаріанський: ${this.isVegetarian ? 'Так' : 'Ні'}`
    ];
  }

  getCategory(): string {
    return 'Готові страви';
  }

  getCuisineType(): string {
    return this.cuisineType;
  }

  isVegetarianDish(): boolean {
    return this.isVegetarian;
  }
}