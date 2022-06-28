import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { SelectPokemonComponent } from './pages/select-pokemon.component';
import { SelectPokemonRoutingModule } from './select-pokemon-routing.module';
import { SelectPokemonService } from './services/select-pokemon.service';

@NgModule({
  declarations: [
    SelectPokemonComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule,
    SelectPokemonRoutingModule,
    FormsModule
  ],
  providers: [SelectPokemonService]
})
export class SelectPokemonModule { }
