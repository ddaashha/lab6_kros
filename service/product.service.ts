import { Injectable } from '@angular/core';
import { IProduct } from '../interface/IProduct';
import { ProductFactory } from '../class/ProductFactory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/680d535f8561e97a5008534b';
  private apiKey = '$2a$10$ZjcCUoT5.aipbKL.zUj3ouhVfyC0NZt1ZFG4biMmV47jKzTrl8lGG';
  private products: IProduct[] = [];

  constructor() {}

  public async load(): Promise<void> {
    try {
      const response = await fetch(this.apiUrl, {
        headers: {
          'X-Master-Key': this.apiKey,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) throw new Error('Network error');
      
      const data = await response.json();
      this.products = data.record.products.map((item: any) => 
        ProductFactory.createProduct(item)
      );
    } catch (error) {
      console.error('API Error:', error);
      this.products = []; 
    }
  }

  public getProducts(): IProduct[] {
    return this.products;
  }

  public getProductById(id: number): IProduct | undefined {
    return this.products.find(p => p.getID() === id);
  }

  public getProductsByCategory(category: string): IProduct[] {
    return this.products.filter(p => p.getCategory() === category);
  }
}