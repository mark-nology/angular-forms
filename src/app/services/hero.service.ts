import { Injectable } from '@angular/core';
import {Hero} from '../hero';

export interface IHero {
  name: string;
  alterEgo: string;
  power: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroList: Hero[] = [];

  constructor() {
    this.heroList[0] = new Hero('Environmentalist', 'Greta Thunberg', 'Inspiring g' +
      'lobal environmental activism', 'https://tinyurl.com/greta-t-pic');
    // this.heroes[1] = new Hero('Steeple Climber', 'Fred Dibnah', 'Bodger', 'https://tinyurl.com/dibnah-pic');
    this.heroList[1] = new Hero('Lightning', 'Ursain Bolt', 'Really fast, victory pose', 'https://tinyurl.com/ursain-pic');
  }

  addHero(newHero: Hero) {
    this.heroList.push(newHero);
  }

}
