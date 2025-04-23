import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {Router} from '@angular/router';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage  {
  router: any;

  constructor(router: Router) { }

  pageWeather()
  {
    this.router.navigate(['/weather']);
  }

joinPage(){
  
}

aboutPage(){
  this.router.navigate(['/about']);
}

}
 


