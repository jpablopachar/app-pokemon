import { Injectable } from '@angular/core';
import { Pokemon } from '@app/models/frontend';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public informationData$: Observable<any>;
  public photoSelected$: Observable<boolean>;
  private _pokemonList: Pokemon[];
  public fileTemp!: File;

  private informationDataSubj: Subject<any>;
  private _photoSelectedSubj: Subject<boolean>;

  constructor() {
    this.informationDataSubj = new Subject();
    this._photoSelectedSubj = new Subject();
    this.informationData$ = this.informationDataSubj.asObservable();
    this.photoSelected$ = this._photoSelectedSubj.asObservable();
    this._pokemonList = [];
  }

  public setInformationData(data: any): void {
    this.informationDataSubj.next(data);
  }

  public setPhotoSelected(isPhotoSelected: boolean): void {
    this._photoSelectedSubj.next(isPhotoSelected);
  }

  public getPokemonList(): Pokemon[] {
    return this._pokemonList;
  }

  public setPokemonList(pokemonList: Pokemon[]): void {
    this._pokemonList = pokemonList;
  }
}
