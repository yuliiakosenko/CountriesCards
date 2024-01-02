import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';
import { MyHttpService } from '../services/my-http.service';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CountryDetailsPage implements OnInit {

  countryName: string = "";
  countryCapital: string = "";
  countryLanguages: string = "";
  countryPopulation: number = 0;
  countryCurency: string = "";
  countryFlagUrl: string = "";
  weatherInfo: any;

  constructor(private router: Router, private mds: MyDataService, private httpService: MyHttpService) { }

  ngOnInit() {
  }

  openHome() { 
    this.router.navigate(['/home'])
  }

  ionViewWillEnter() { 
    this.getCountryDetails();
    
  }
  async getCountryDetails() { 
    var result = await this.mds.get("myCountry")
    console.log(JSON.stringify(result))
    this.countryName = result.name.official;
    this.countryCapital = result.capital;
    this.countryLanguages = this.processLanguages(result.languages); 
    this.countryPopulation = result.population;
    this.countryFlagUrl = result.flags.png;
    

  var firstCurrencyKey = Object.keys(result.currencies)[0];
  var firstCurrency = result.currencies[firstCurrencyKey];
  this.countryCurency = firstCurrency.name + " (" + firstCurrency.symbol + ")";

    if(result.latlng && result.latlng.length === 2) {
   this.getWeather(result.latlng[0], result.latlng[1]);
}
  }
  
  processLanguages(languages: any): string {
    return Object.values(languages).join(', ');
  }

async getWeather(latitude: number, longitude: number) {
  
    const weatherData = await this.httpService.getWeather(latitude, longitude);
    this.weatherInfo = weatherData;
  
}
  

  

}