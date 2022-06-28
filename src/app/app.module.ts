import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { UserInformationComponent } from './components/user-information.component';
import { MainModule } from './services/main/main.module';
import { ButtonModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    UserInformationComponent,
    TitleSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule.forRoot(),
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
