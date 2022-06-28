import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInformation } from '@app/models/frontend';
import { MainService } from '@app/services/main/main.service';

@Component({
  selector: 'app-register-information',
  templateUrl: './register-information.component.html',
  styleUrls: ['./register-information.component.css'],
})
export class RegisterInformationComponent implements OnInit {
  public form: FormGroup;
  public hobbiesList: { id: number; name: string }[];
  public isAdult: boolean;
  public isPhotoSelected: boolean;

  constructor(
    private readonly _router: Router, 
    private readonly _formBuilder: FormBuilder,
    private readonly _mainService: MainService
  ) {
    this.form = this._formBuilder.group({
      name: [null, Validators.required],
      hobby: [null, Validators.required],
      birthday: [null, Validators.required],
      document: [null],
    });
    this.hobbiesList = [
      { id: 1, name: 'Jugar Fútbol' },
      { id: 2, name: 'Jugar Basquetball' },
      { id: 3, name: 'Jugar Tennis' },
      { id: 4, name: 'Jugar Voleibol' },
      { id: 5, name: 'Jugar Fifa' },
      { id: 6, name: 'Jugar Vídeojuegos' },
    ];
    this.isAdult = true;
    this.isPhotoSelected = false;
  }

  ngOnInit(): void {
    this._mainService.photoSelected$.subscribe((res): void => {
      this.isPhotoSelected = res;
    });
    this.form.get('birthday')?.valueChanges.subscribe((value: string): void => {
      this.isAdult =
        new Date(value)?.getFullYear() <= new Date().getFullYear() - 18;

      if (this.isAdult) {
        this.form.get('document')?.setValidators(Validators.required);
      } else {
        this.form.get('document')?.clearValidators();
      }
    });
  }

  onSubmit(): void {
    const { name, hobby, birthday, document } = this.form.controls;
    const userInformation: UserInformation = {
      name: name.value,
      hobby: this._getHobbyName(Number(hobby.value)) as { id: number, name: string },
      birthday: birthday.value,
      document: document.value,
    }

    this._mainService.setInformationData(userInformation);
    this._router.navigateByUrl('selected');
  }

  private _getHobbyName(hobbyId: number): { id: number, name: string } | undefined {
    return this.hobbiesList.find((hobby): boolean => hobby.id === hobbyId);
  }
}
