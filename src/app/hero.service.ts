import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  heroServerUrl = "http://localhost:3000/";

  getHeroes(): Observable<any> {
    console.log('in getHeroes');
    return this.http.get(this.heroServerUrl+'superheroes');
  }

  getHero(index: number) : Observable<any> {
    console.log('in getHero for index ' + index);
    return this.http.get(this.heroServerUrl+'superhero/'+index);
  }
}
