import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];


  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  addHero(hero : Hero) {
    this.heroes.push(hero);
  }

}
