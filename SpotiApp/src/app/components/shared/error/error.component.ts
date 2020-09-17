import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {

  @Input() error: any = {};
  
  errorMessage: string;

  constructor() { 
    this.getErrorMessage();
  }

  getErrorMessage(){
    // console.log(this.error);
    this.errorMessage = this.error.message;
  }


}
