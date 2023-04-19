import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environement } from 'src/environnements/environnement';

export interface WeatherReponse{
  address: string;
  currentConditions: {
    temp: number;
  };
}

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {


  apiUrl = environement.weatherApi.apiUrl;
  apiKey = environement.weatherApi.apiKey;

  constructor(private http: HttpClient ) { }

  getWeatherData(): Observable<WeatherReponse> {
    const url = `${this.apiUrl}/Tirana?unitGroup=metric&key=${this.apiKey}&contentType=json`;

    return this.http.get<WeatherReponse>(url);
  }
  
}


