import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPokemonComponent } from './pages/select-pokemon.component';

const routes: Routes = [{ path: '', component: SelectPokemonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectPokemonRoutingModule { }
