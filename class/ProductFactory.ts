import { IProduct } from '../interface/IProduct';
import { Food } from './Food';
import { Drink } from './Drink';
import { Dessert } from './Dessert';
import { Salad } from './Salad';

export class ProductFactory {
  static createProduct(data: any): IProduct {
    const baseData = {
      id: data.id,
      name: data.name,
      price: data.price,
      image: data.image || this.getDefaultImage(data.type)
    };

    switch (data.type) {
      case 'food':
        return new Food(
          baseData.id,
          baseData.name,
          baseData.price,
          data.cuisineType,
          data.isVegetarian,
          baseData.image
        );
      case 'drink':
        return new Drink(
          baseData.id,
          baseData.name,
          baseData.price,
          data.volume,
          data.isAlcoholic,
          baseData.image
        );
      case 'dessert':
        return new Dessert(
          baseData.id,
          baseData.name,
          baseData.price,
          data.calories,
          data.containsGluten,
          baseData.image
        );
      case 'salad':
        return new Salad(
          baseData.id,
          baseData.name,
          baseData.price,
          data.ingredients,
          data.isVegetarian,
          baseData.image
        );
      default:
        throw new Error(`Невідомий тип продукту: ${data.type}`);
    }
  }

  private static getDefaultImage(type: string): string {
    switch (type) {
      case 'food': return 'assets/default-food.png';
      case 'drink': return 'assets/default-drink.png';
      case 'dessert': return 'assets/default-dessert.png';
      case 'salad': return 'assets/default-salad.png';
      default: return 'assets/default-product.png';
    }
  }
}