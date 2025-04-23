
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesPage{



  constructor(private HttpClient: HttpClient) { }

getWeatherData():Observable<any>{
  return this.HttpClient.get("https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303");
}

}
