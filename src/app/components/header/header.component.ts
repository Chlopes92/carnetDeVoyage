import { Component, OnInit } from '@angular/core';
import { environement } from 'src/environnements/environnement';
import { WeatherReponse, WeatherServiceService } from 'src/app/services/weather-service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  weatherInfo?: WeatherReponse;

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit(){
    this.weatherService.getWeatherData().subscribe((data) => {
      console.log(data);
      this.weatherInfo = data;
    });
  }

}

