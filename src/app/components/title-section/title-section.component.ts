import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserInformation } from '@app/models/frontend';
import { MainService } from '@app/services/main/main.service';

@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css']
})
export class TitleSectionComponent implements OnInit {
  public title: string;
  public description: string;
  public isTrainer: boolean;

  private _userInformation!: UserInformation;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _mainService: MainService
  ) {
    this.title = '¡Hola! Configuremos tu perfil';
    this.description = 'Queremos conocerte mejor';
    this.isTrainer = false;
  }

  ngOnInit(): void {
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd && event.url) {
        if (event.url.includes('selected')) {
          this.title = '¡Ya casi terminamos!';
          this.description = 'Revisa la información, y completa lo solicitado.';
        } else if (event.url.includes('profile')) {
          this.title = `!Hola ${this._userInformation.name}¡`;
          this.isTrainer = true;
        }
      }
    });

    this._mainService.informationData$.subscribe((data) => {
      this._userInformation = data;
    })
  }
}
