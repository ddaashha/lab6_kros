import { Salad } from './Salad';

describe('Salad', () => {
    let salad: Salad;

    beforeEach(() => {
        salad = new Salad(1, 'Caesar Salad', 130, ['lettuce', 'croutons', 'parmesan', 'dressing'], false);
    });

    it('should create a salad', () => {
        expect(salad.getID()).toBe(1);
        expect(salad.getName()).toBe('Caesar Salad');
        expect(salad.getPrice()).toBe(130);
        expect(salad.getType()).toBe('salad');
    });

    it('should return correct details', () => {
        expect(salad.getDetails()).toEqual([
            'Інгредієнти: lettuce, croutons, parmesan, dressing',
            'Вегетаріанський: Ні'
        ]);
    });

    it('should return correct ingredients', () => {
        expect(salad.getIngredients()).toEqual(['lettuce', 'croutons', 'parmesan', 'dressing']);
    });

    it('should correctly identify vegetarian status', () => {
        expect(salad.isVegetarianSalad()).toBeFalse();
    });
});