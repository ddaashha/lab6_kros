import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { FoodDeliveryComponent } from '../food-delivery/food-delivery.component';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [ IonContent, MyHeaderComponent, FoodDeliveryComponent],
})
export class HomePage {
    constructor() {}
}