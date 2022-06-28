import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from './guards/main.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        loadChildren: () =>
          import(
            './pages/register-information/register-information.module'
          ).then((m) => m.RegisterInformationModule),
      },
      {
        path: 'selected',
        loadChildren: () =>
          import('./pages/select-pokemon/select-pokemon.module').then(
            (m) => m.SelectPokemonModule
          ),
          canActivate: [MainGuard],
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/pokemon-list/pokemon-list.module').then(
            (m) => m.PokemonListModule
          ),
          canActivate: [MainGuard],
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'register',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
