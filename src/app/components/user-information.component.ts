import { Component, OnInit } from '@angular/core';
import { UserInformation } from '@app/models/frontend';
import { MainService } from '@app/services/main/main.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {
  public photoSelected!: string | ArrayBuffer | null;
  public userInformation!: UserInformation;
  public file!: File | undefined;
  public name: string;
  public age!: string;

  constructor(private readonly _mainService: MainService) {
    this.photoSelected = null;
    this.name = 'Imágen perfil';
  }

  ngOnInit(): void {
    this._mainService.informationData$.subscribe((res): void => {
      this.userInformation = res;
      this.name = this.userInformation.name;
      this.age = String(new Date().getFullYear() - new Date(this.userInformation.birthday).getFullYear());
    });
  }

  onPhotoSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      
      // image preview
      const reader: FileReader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);

      this._mainService.setPhotoSelected(true);
      this._mainService.fileTemp = this.file;
    }
  }

  removePhoto(): void {
    this.photoSelected = null;
    this.file = undefined;

    this._mainService.setPhotoSelected(false);
  }
}
