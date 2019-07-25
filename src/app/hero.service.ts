import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Hero} from "./hero";
import {stringify} from "querystring";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

  heroServerUrl = "http://localhost:3000/";

  getHeroes(): Observable<any> {
    console.log('in getHeroes');
    return this.http.get(this.heroServerUrl+'superheroes');  // add catch returning observable
  }

  getHero(index: number) : Observable<any> {
    console.log('in getHero for index ' + index);
    return this.http.get(this.heroServerUrl+'superhero/'+index); // add catch returning observable
  }

  postHero(h: Hero) : Observable<any> {      // in development
    console.log('in poastHero for hero ' + stringify(h));

    const httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded");
    const httpParams = new HttpParams()
      .append("name", h.name)
      .append("alterEgo", h.alterEgo)
      .append("power", h.power)
      .append("url", h.url);

    let options = { headers: httpHeaders, params: httpParams };
    return this.http.post(this.heroServerUrl, options)
  }
}
