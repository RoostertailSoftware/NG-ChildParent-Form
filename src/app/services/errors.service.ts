import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  constructor() { }

  toastErrorMessage( form: any ): any {
    console.log( "error", form )
  }


}
