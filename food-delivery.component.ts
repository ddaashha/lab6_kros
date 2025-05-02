import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IProduct } from '../food-delivery/interface/IProduct';
import { ProductService } from '../food-delivery/service/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-delivery',
  templateUrl: './food-delivery.component.html',
  styleUrls: ['./food-delivery.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [ProductService]
})
export class FoodDeliveryComponent implements OnInit {
  products: IProduct[] = [];
  isLoading: boolean = true;
  errorMessage: string | null = null;

  constructor(private productService: ProductService) {} // Fixed capitalization

  async ngOnInit(): Promise<void> {
    await this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    this.isLoading = true;
    this.errorMessage = null;

    try {
      await this.productService.load(); // Updated to lowercase
      this.products = this.productService.getProducts(); // Updated to lowercase
    } catch (error) {
      this.errorMessage = 'Не вдалося завантажити меню. Спробуйте пізніше.';
      this.products = [];
    } finally {
      this.isLoading = false;
    }
  }
}