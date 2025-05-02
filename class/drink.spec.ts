import { Drink } from './Drink';

describe('Drink', () => {
    let drink: Drink;

    beforeEach(() => {
        drink = new Drink(1, 'Orange Juice', 50, 250, false);
    });

    it('should create a drink', () => {
        expect(drink.getID()).toBe(1);
        expect(drink.getName()).toBe('Orange Juice');
        expect(drink.getPrice()).toBe(50);
        expect(drink.getType()).toBe('drink');
    });

    it('should return correct details', () => {
        expect(drink.getDetails()).toEqual([
            "Об'єм: 250 мл",
            "Алкогольний: Ні"
        ]);
    });

    it('should return correct volume', () => {
        expect(drink.getVolume()).toBe(250);
    });

    it('should correctly identify alcohol content', () => {
        expect(drink.containsAlcohol()).toBeFalse();
    });
});