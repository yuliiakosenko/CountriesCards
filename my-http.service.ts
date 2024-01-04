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


  async getUselessFact() {    //inspired https://free-apis.github.io/#/browse -->> https://uselessfacts.jsph.pl/api/v2/facts/random 
    var factOptions: HttpOptions = {
      url: `https://uselessfacts.jsph.pl/api/v2/facts/random`
    }
    return await CapacitorHttp.get(factOptions);
  }

  async getNews(keyword: string) {
    var newsOptions: HttpOptions = {
      url: `https://api.currentsapi.services/v1/search?keywords=${keyword}&apiKey=vIc9s2H39G3Ddu_kDQldgyN81DX4bxlENAVOhJuIl5ywjD6d`
    };

      const response = await CapacitorHttp.get(newsOptions);
    
      return response.data.news;
    } 

  }
