// import { Component, EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Hero } from '../../hero';
import {HeroService} from '../../services/hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Walks through walls', 'invisibility'];
  hero = new Hero('', '', '', 'http://localhost:4200/assets/superhero.png');
  ego;
  constructor(private heroService: HeroService) {}

  onSubmit() {
    // console.log('submit pressed');
    this.heroService.addHero(this.hero);
    this.hero = new Hero(
      'Superhero name',
      'Human name',
      this.powers[0],
      'http://localhost:4200/assets/superhero.png'
    );
  }
}
