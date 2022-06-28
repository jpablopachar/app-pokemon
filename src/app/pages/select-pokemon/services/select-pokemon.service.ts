import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectPokemonService {
  private _url: string;

  constructor(private readonly _http: HttpClient) {
    this._url = 'https://pokeapi.co/api/v2';
  }

  getPokemon(index:number): Observable<any> {
    return this._http.get<any>(`${this._url}/pokemon/${index}`);
  }
}
