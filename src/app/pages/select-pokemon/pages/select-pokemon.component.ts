import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '@app/models/frontend';
import { MainService } from '@app/services/main/main.service';
import { SelectPokemonService } from '../services/select-pokemon.service';

@Component({
  selector: 'app-select-pokemon',
  templateUrl: './select-pokemon.component.html',
  styleUrls: ['./select-pokemon.component.css']
})
export class SelectPokemonComponent implements OnInit {
  public pokemonList: Pokemon[];
  public textSearch: string;
  public isIncompleted: boolean;

  private _pokemonListTemp: Pokemon[];

  constructor(
    private readonly _router: Router,
    private readonly _selectPokemonService: SelectPokemonService,
    private readonly _mainService: MainService
  ) {
    this.pokemonList = [];
    /* this.pokemonList = [
      {
        id: 1,
        name: 'Bulbasaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        status: false
      },
      {
        id: 2,
        name: 'Ivysaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        status: false
      },{
        id: 3,
        name: 'Venusaur',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        status: false
      },
      {
        id: 4,
        name: 'Charmander',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        status: false
      },
      {
        id: 5,
        name: 'Charmeleon',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        status: false
      },
      {
        id: 6,
        name: 'Charizard',
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        status: false
      }
    ] */
    this._pokemonListTemp = this.pokemonList;
    this.textSearch = '';
    this.isIncompleted = true;
  }

  ngOnInit(): void {
    this._getPokemons();
  }

  private _getPokemons(): void {
    let pokemon: Pokemon;

    for (var index = 1; index <= 10; index++) {
      this._selectPokemonService.getPokemon(index).subscribe((res): void => {
        pokemon = {
          id: res.id,
          name: res.name,
          image: res.sprites.front_default,
          status: false
        };

        this.pokemonList.push(pokemon);
      });
    }

  }

  public listenPokemon(pokemon: Pokemon): void {
    const index: number = this.pokemonList.findIndex((res: Pokemon): boolean => res.id === pokemon.id);

    this.pokemonList[index].status = !this.pokemonList[index].status;

    const pokemons: Pokemon[] = this.pokemonList.filter((pokemon: Pokemon): boolean => pokemon.status === true);

    if (pokemons.length > 3) {
      this.pokemonList[index].status = false;

      return;
    }

    this.isIncompleted = pokemons.length === 3 ? false : true;
  }

  public searchPokemon(): void {
    if (this.textSearch.trim().length === 0) {
      this.pokemonList = this._pokemonListTemp;

      return;
    }

    const isNumber = Number.isNaN(Number(this.textSearch));

    if (!isNumber) {
      this.pokemonList = this.pokemonList.filter((pokemon: Pokemon): boolean => pokemon.id === Number(this.textSearch));
    } else {
      this.pokemonList = this.pokemonList.filter((pokemon: Pokemon): boolean => pokemon.name.toLowerCase().includes(this.textSearch.toLowerCase()));
    }
  }

  public savePokemons(): void {
    const pokemons: Pokemon[] = this.pokemonList.filter((pokemon: Pokemon): boolean => pokemon.status === true);

    this._mainService.setPokemonList(pokemons);

    this._router.navigateByUrl('profile');
  }
}
