import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@app/models/frontend';
import { MainService } from '@app/services/main/main.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public pokemonList: Pokemon[];

  constructor(private readonly _mainService: MainService) {
    this.pokemonList = this._mainService.getPokemonList();
  }

  ngOnInit(): void {
  }

}
