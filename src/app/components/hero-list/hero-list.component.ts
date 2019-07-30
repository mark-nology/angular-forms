import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.heroList;
  }

  // addHero(hero: Hero) {
  //   //   // console.log('in addHero');
  //   //   // console.log(hero);
  //   //   this.heroes.push(hero);
  //   // }

}
