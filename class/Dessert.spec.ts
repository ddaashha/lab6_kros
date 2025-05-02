import { Dessert } from './Dessert';

describe('Dessert', () => {
    let dessert: Dessert;

    beforeEach(() => {
        dessert = new Dessert(1, 'Chocolate Cake', 120, 350, false);
    });

    it('should create a dessert', () => {
        expect(dessert.getID()).toBe(1);
        expect(dessert.getName()).toBe('Chocolate Cake');
        expect(dessert.getPrice()).toBe(120);
        expect(dessert.getType()).toBe('dessert');
    });

    it('should return correct details', () => {
        expect(dessert.getDetails()).toEqual([
            'Калорійність: 350 ккал',
            'Містить глютен: Ні'
        ]);
    });

    it('should return correct calories', () => {
        expect(dessert.getCalories()).toBe(350);
    });

    it('should correctly identify gluten-free status', () => {
        expect(dessert.isGlutenFree()).toBeTrue();
    });
});