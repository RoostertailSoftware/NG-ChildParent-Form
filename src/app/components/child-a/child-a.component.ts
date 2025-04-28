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

  //My Form
  FormG!: FormGroup;

  // for giggles -- create as many childB components
  howManyChildB: Array<number> = [1, 2, 3, 4];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormG = this.fb.group({
      firstName: [null, [Validators.minLength(5), Validators.required]],
      middleName:[null, [Validators.minLength(0) ]],
    });
    // Send this to parent
    this.passChildOnToParent( this.FormG )

  }

  // Pass whatever comes in onto Parent
  passChildOnToParent(event: FormGroup) {
    this.childsOutput.emit(event);
  }
}
