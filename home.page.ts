import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MyDataService } from '../services/my-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, CommonModule, IonButton],
})
export class HomePage implements OnInit{

  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/all" 
  }

  countries: any = [];

  constructor(private mhs: MyHttpService, private router: Router, private mds: MyDataService) { }
  
  ngOnInit() { 

  }

  ionViewWillEnter() { 
    this.getCountries();
  }
  async getCountries() { 
    var result = await this.mhs.get(this.options)
    this.countries = result.data;
    
  }

  async openCountryDetails(country: any) { 
    await this.mds.set("myCountry", country)
    this.router.navigate(['/country-details'])

  }
}
