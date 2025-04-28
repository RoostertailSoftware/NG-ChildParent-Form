import { Component, output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildBComponent } from '../child-b/child-b.component';

@Component({
  selector: 'app-child-a',
  imports: [ChildBComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss',
})
export class ChildAComponent implements OnInit {
  // If the form is changed I will inform this output
  childsOutput = output<FormGroup>();
  JSON = JSON
  //My Form
  FormG!: FormGroup;

  // for giggles -- create as many childB components
  howManyChildB: Array<number> = [1, 2, 3, 4];

  constructor(private fb: FormBuilder) {
 
   }

  ngOnInit(): void {
    this.FormG = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5) ]],
      middleName:[null, [Validators.minLength(0), Validators.maxLength(1) ]],
    });

    // Send this to parent
    this.passChildOnToParent( this.FormG )

  }

  // Pass whatever comes in onto Parent
  passChildOnToParent(event: FormGroup) {
    this.childsOutput.emit(event);
  }

  isRequired( s: string ): boolean {
    return this.FormG.controls[s].hasValidator( Validators.required)
  }

  isWorthy(s: string ):  boolean {
    return this.FormG.controls['firstName'].invalid && 
        ( this.FormG.controls['firstName'].dirty || 
          this.FormG.controls['firstName'].touched )
  }
  isWorthy2( f: FormGroup ): boolean {
    return f.invalid && 
        ( f.dirty || 
          f.touched )
  }
}
