import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './hero';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  heroServerUrl = "http://localhost:3000/superheroes"

  getHeroes(): Observable<any> {
    console.log('in getHeroes');
    return this.http.get(this.heroServerUrl);  }
}
