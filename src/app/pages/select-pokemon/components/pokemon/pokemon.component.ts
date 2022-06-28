import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '@app/models/frontend';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() pokemonSelected!: Pokemon;
  @Output() pokemonSelectedChange = new EventEmitter<Pokemon>();

  setPokemonSelected(): void {
    this.pokemonSelectedChange.emit(this.pokemonSelected);
  }
}
