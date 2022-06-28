import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInformationComponent } from './pages/register-information.component';

const routes: Routes = [{ path: '', component: RegisterInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterInformationRoutingModule { }
