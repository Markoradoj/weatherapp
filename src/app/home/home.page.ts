import { Component } from '@angular/core';
import {IonButtons,IonCol, IonRow, IonGrid, IonButton,IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [ IonButtons, IonButton, IonCol, IonRow, IonGrid, IonButton, IonBackButton, IonHeader, IonToolbar, IonTitle, IonContent]
})
export class HomePage {
  constructor(private rotuer: Router) {}

  pageWeather()
  {
    this.rotuer.navigate(['/weather']);
  }

joinPage(){
  
}

aboutPage(){
  this.rotuer.navigate(['/about']);
}

}
