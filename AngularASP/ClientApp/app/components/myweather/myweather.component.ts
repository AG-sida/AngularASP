import { Component, Inject , Input, Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormsModule, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'myweather',
    templateUrl: './myweather.component.html'
   
})
    @Injectable()
export class MyWeatherComponent implements OnInit {
    constructor(private http :Http) { }
    listText = 'My first to-do';
    btnText = 'Skickas';
    cityName = '';
    cityHumid = '';

    searchWeatherData(Leo: NgForm) {
        this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&units=metric&APPID=3d9567577fa28f844577af0bcd1d48f8')
            .subscribe(
            (res: Response) => {
                const weatherCity = res.json();               
                console.log(weatherCity);
                this.cityHumid = weatherCity.main.humidity;   
                console.log(weatherCity.main.humidity);
              
            }
           
        )
    }
    ngOnInit() { }
    addItem() {
        //this.cityName.push(); 
    }
    addCity() {
        //this.form.get('email').setValue("example@example.com");
    }

  
     
    title = 'app works';


}




