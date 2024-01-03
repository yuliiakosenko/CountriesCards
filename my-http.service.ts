import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private apiKey = "QGQUL36JC73RBCCEAVN6H4MSJ";
  private apiKeyCurrency = "fd16bcea5171080120d6a99e";
  constructor() { }

  
  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }

 async getWeather(latitude: number, longitude: number) {
    var weatherOptions: HttpOptions = {
      url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${this.apiKey}`
     
    };
    return await CapacitorHttp.get(weatherOptions);
 }
  
  async getExchangeRate(firstCurrency: string) {
    var RateOptions: HttpOptions = {
      url: `https://v6.exchangerate-api.com/v6/${this.apiKeyCurrency}/pair/${firstCurrency}/EUR`
    }
     return await CapacitorHttp.get(RateOptions);
    
  }

}
