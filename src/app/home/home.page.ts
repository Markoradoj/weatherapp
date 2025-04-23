import { Component } from '@angular/core';
import {IonButtons,IonCol, IonRow, IonGrid, IonButton,IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButton, IonCol, IonRow, IonGrid, IonButton, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() {}
}
