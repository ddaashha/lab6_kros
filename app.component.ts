import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenuToggle, IonContent, IonList, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonMenuToggle, IonContent, IonList, IonItem],
})
export class AppComponent {
  constructor() {}
}