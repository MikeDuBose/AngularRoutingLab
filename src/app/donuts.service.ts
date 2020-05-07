import { Injectable } from '@angular/core';
import { Donuts, Donut, DonutDetail } from './interfaces/donutList';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonutService {
  apiUrl = 'https://grandcircusco.github.io/demo-apis';
  constructor(private http:HttpClient) { }
 
  getDonuts() {
    return this.http.get<Donut>(`${this.apiUrl}/donuts.json`)
  }

  getDonutDetail(id:number) {
    return this.http.get<DonutDetail>(`${this.apiUrl}/donuts/${id}.json`);
  }
}
