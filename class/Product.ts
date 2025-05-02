import { IProduct } from '../interface/IProduct';

export abstract class Product implements IProduct {
  constructor(
    protected id: number,
    protected name: string,
    protected price: number,
    protected category: string, 
    protected imageUrl: string = 'assets/default-product.png'
  ) {}

  getID(): number { return this.id; }
  getName(): string { return this.name; }
  getPrice(): number { return this.price; }
  getType(): string { return this.category; }
  getImage(): string { return this.imageUrl; }
  
  abstract getDetails(): string[];
  abstract getCategory(): string;
}