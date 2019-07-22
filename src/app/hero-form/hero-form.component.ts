import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent  {
  powers = [ 'Really Smart', 'Walks through walls', 'invisibility'];

  hero = new Hero('Superhero name', 'Human name', this.powers[0], 'http://localhost:4200/assets/superhero.png');

  constructor() { }

  onSubmit() {
    this.newHero.emit( this.hero );
    this.hero = new Hero('Superhero name', 'Human name', this.powers[0], 'http://localhost:4200/assets/superhero.png');
  }

  @Output() newHero = new EventEmitter();

}
