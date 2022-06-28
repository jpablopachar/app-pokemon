import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from '@app/shared';
import { PokemonListComponent } from './pages/pokemon-list.component';
import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokemonListRoutingModule,
    ButtonModule
  ]
})
export class PokemonListModule { }
