import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor() {

    this.heroes[0] = new Hero('Environmentalist', 'Greta Thurnberg', 'Inspiring g' +
      'lobal environmental activism', 'https://tinyurl.com/greta-t-pic');
    //this.heroes[1] = new Hero('Steeple Climber', 'Fred Dibnah', 'Bodger', 'https://tinyurl.com/dibnah-pic');
    this.heroes[1] = new Hero('Lightning', 'Ursain Bolt', 'Really fast, victory pose', 'https://tinyurl.com/ursain-pic');
  }

  ngOnInit() {
  }

  addHero(hero : Hero) {
    //console.log('in addHero');
    //console.log(hero);
    this.heroes.push(hero);
  }

}
