import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

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
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    })
  }

  // not used atm, but tested to work
  getHero(index: number): void {
    this.heroService.getHero(index).subscribe(data => {
      this.heroes = [data];
    })
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

}
