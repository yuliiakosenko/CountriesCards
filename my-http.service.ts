import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  private apiKey = "QGQUL36JC73RBCCEAVN6H4MSJ";
  constructor() { }

  
  async get(options: HttpOptions) {
    return await CapacitorHttp.get(options);
  }

 async getWeather(latitude: number, longitude: number) {
    const weatherOptions: HttpOptions = {
      url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${this.apiKey}`,
     
    };
    return await CapacitorHttp.get(weatherOptions);
  }

}
