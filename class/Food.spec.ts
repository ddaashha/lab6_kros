import { Food } from './Food';

describe('Food', () => {
    let food: Food;

    beforeEach(() => {
        food = new Food(1, 'Pasta Carbonara', 180, 'Italian', false);
    });

    it('should create a food item', () => {
        expect(food.getID()).toBe(1);
        expect(food.getName()).toBe('Pasta Carbonara');
        expect(food.getPrice()).toBe(180);
        expect(food.getType()).toBe('food');
    });

    it('should return correct details', () => {
        expect(food.getDetails()).toEqual([
            'Тип кухні: Italian',
            'Вегетаріанський: Ні'
        ]);
    });

    it('should return correct cuisine type', () => {
        expect(food.getCuisineType()).toBe('Italian');
    });

    it('should correctly identify vegetarian status', () => {
        expect(food.isVegetarianDish()).toBeFalse();
    });
});