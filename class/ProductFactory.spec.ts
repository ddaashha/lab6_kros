import { ProductFactory } from './ProductFactory';
import { Food } from './Food';
import { Drink } from './Drink';
import { Dessert } from './Dessert';
import { Salad } from './Salad';

describe('ProductFactory', () => {
    it('should create a Food product', () => {
        const data = { 
            type: 'food', 
            id: 1, 
            name: 'Pizza', 
            price: 200, 
            cuisineType: 'Italian', 
            isVegetarian: false 
        };
        const product = ProductFactory.createProduct(data);
        expect(product.getType()).toBe('food');
        expect(product.getName()).toBe('Pizza');
        expect(product).toBeInstanceOf(Food);
    });

    it('should create a Drink product', () => {
        const data = { 
            type: 'drink', 
            id: 2, 
            name: 'Cola', 
            price: 30, 
            volume: 330, 
            isAlcoholic: false 
        };
        const product = ProductFactory.createProduct(data);
        expect(product.getType()).toBe('drink');
        expect(product.getName()).toBe('Cola');
        expect(product).toBeInstanceOf(Drink);
    });

    it('should create a Dessert product', () => {
        const data = { 
            type: 'dessert', 
            id: 3, 
            name: 'Cheesecake', 
            price: 150, 
            calories: 450, 
            containsGluten: true 
        };
        const product = ProductFactory.createProduct(data);
        expect(product.getType()).toBe('dessert');
        expect(product.getName()).toBe('Cheesecake');
        expect(product).toBeInstanceOf(Dessert);
    });

    it('should create a Salad product', () => {
        const data = { 
            type: 'salad', 
            id: 4, 
            name: 'Greek Salad', 
            price: 120, 
            ingredients: ['tomatoes', 'cucumber', 'olives', 'feta'], 
            isVegetarian: true 
        };
        const product = ProductFactory.createProduct(data);
        expect(product.getType()).toBe('salad');
        expect(product.getName()).toBe('Greek Salad');
        expect(product).toBeInstanceOf(Salad);
    });

    it('should throw an error for invalid product type', () => {
        const data = { type: 'invalid', id: 5, name: 'Invalid', price: 100 };
        expect(() => ProductFactory.createProduct(data)).toThrowError('Невідомий тип продукту: invalid');
    });
});