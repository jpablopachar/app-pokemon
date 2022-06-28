import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterInformationComponent } from './pages/register-information.component';
import { RegisterInformationRoutingModule } from './register-information-routing.module';

@NgModule({
  declarations: [
    RegisterInformationComponent
  ],
  imports: [
    CommonModule,
    RegisterInformationRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterInformationModule { }
