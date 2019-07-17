import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})

export class HeroFormComponent  {

  powers = [ 'Really Smart', 'Walks through walls', 'invisibility'];
  @Output() newHero = new EventEmitter();


  constructor() { }

  model = new Hero('Superhero name', 'Human name', this.powers[0], 'http://localhost:4200/assets/superhero.png');

  onSubmit() {
    console.log('submit pressed');
    this.newHero.emit( this.model );
    this.model = new Hero('Superhero name', 'Human name', this.powers[0], 'http://localhost:4200/assets/superhero.png');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
