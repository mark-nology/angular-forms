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
      this.heroes = [data]; //will remove array
    })
  }

  // in development
  postHero(): void {
    this.heroService.postHero(new Hero('markie', 'mvh', 'dev', 'urlthing'))
      .subscribe(()=> { // what might post return, depends on server choices likely
        console.log('yay post');
      })
  }

  addHero(hero: Hero) {   // will need a post in here
    this.heroes.push(hero);
  }

}
