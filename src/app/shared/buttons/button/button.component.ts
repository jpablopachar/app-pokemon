import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button type="button" class="btn btn-outline-primary"><span><i class="fas fa-pencil-alt mr-3"></i>{{ text }}</span></button>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
