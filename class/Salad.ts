import { Product } from './Product';

export class Salad extends Product {
  constructor(
    id: number,
    name: string,
    price: number,
    private ingredients: string[],
    private isVegetarian: boolean, 
    imageUrl: string = 'assets/default-salad.png'
  ) {
    super(id, name, price, 'salad', imageUrl);
  }

  getDetails(): string[] {
    return [
      `Інгредієнти: ${this.ingredients.join(', ')}`,
      `Вегетаріанський: ${this.isVegetarian ? 'Так' : 'Ні'}`
    ];
  }

  getCategory(): string {
    return 'Салати';
  }

  getIngredients(): string[] {
    return this.ingredients;
  }

  isVegetarianSalad(): boolean {
    return this.isVegetarian;
  }
}