import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MainService } from './main.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class MainModule {
  static forRoot(): ModuleWithProviders<MainModule> {
    return {
      ngModule: MainModule,
      providers: [MainService],
    };
  }
}
