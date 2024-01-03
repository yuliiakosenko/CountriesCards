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
  currencyInfo: any;
  money!: number;

  amount!: number;

  constructor(private router: Router, private mds: MyDataService, private mhs: MyHttpService) { }

  ngOnInit() {
    
  }

  openHome() { 
    this.router.navigate(['/home'])
  }

  convertCurrency() { 
    this.money = this.amount * this.currencyInfo;
    
  }

  ionViewWillEnter() { 
    this.getCountryDetails();
    
  }
 async getCountryDetails() { 
  var result = await this.mds.get("myCountry");
  
  this.countryName = result.name.official;
  this.countryCapital = result.capital;
  this.countryLanguages = this.processLanguages(result.languages); 
  this.countryPopulation = result.population;
  this.countryFlagUrl = result.flags.png;

  var firstCurrency = Object.keys(result.currencies)[0];
   this.countryCurency = firstCurrency;
   this.getRate(firstCurrency);

  if(result.latlng && result.latlng.length === 2) {
    this.getWeather(result.latlng[0], result.latlng[1]);
  }
}

  
  processLanguages(languages: any): string {
    return Object.values(languages).join(', ');
  }

async getWeather(latitude: number, longitude: number) {
 
    var weatherData = await this.mhs.getWeather(latitude, longitude);
    this.weatherInfo = this.processWeather(weatherData); 

}
  
 processWeather(weatherData: any): string {
  return weatherData.data.description;
}
  
  async getRate(firstCurrency: string) { 
    var rateData = await this.mhs.getExchangeRate(firstCurrency);
    this.currencyInfo = this.processRate(rateData);
  }

  processRate(rateData: any): string { 
    return rateData.data.conversion_rate;
  }

}