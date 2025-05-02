import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FoodDeliveryComponent } from './food-delivery.component';
import { ProductService } from '../food-delivery/service/product.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../food-delivery/interface/IProduct';
import { of, throwError } from 'rxjs';


class MockProduct implements IProduct {
  constructor(
    private id: number,
    private name: string,
    private category: string,
    private price: number,
    private image: string,
    private details: string[]
  ) {}

  getID(): number { return this.id; }
  getName(): string { return this.name; }
  getCategory(): string { return this.category; }
  getPrice(): number { return this.price; }
  getImage(): string { return this.image; }
  getDetails(): string[] { return this.details; }
  getType(): string { return 'mock'; }
}

describe('FoodDeliveryComponent', () => {
  let component: FoodDeliveryComponent;
  let fixture: ComponentFixture<FoodDeliveryComponent>;
  let productService: jasmine.SpyObj<ProductService>;


  const mockProducts: IProduct[] = [
    new MockProduct(
      1,
      'Pizza',
      'Main',
      150,
      'pizza.jpg',
      ['Cheese', 'Tomato']
    )
  ];

  beforeEach(async () => {
    productService = jasmine.createSpyObj('ProductService', ['load', 'getProducts']);
    
    await TestBed.configureTestingModule({
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        FoodDeliveryComponent
      ],
      providers: [
        { provide: ProductService, useValue: productService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with loading state', () => {
    expect(component.isLoading).toBeTrue();
    expect(component.errorMessage).toBeNull();
    expect(component.products).toEqual([]);
  });

  it('should load products successfully on ngOnInit', fakeAsync(() => {
    productService.load.and.returnValue(Promise.resolve());
    productService.getProducts.and.returnValue(mockProducts);
    component.ngOnInit();
    tick();

 
    
  }));

});