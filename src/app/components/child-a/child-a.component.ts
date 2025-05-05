import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildBComponent } from '../child-b/child-b.component';

@Component({
  selector: 'app-child-a',
  imports: [ChildBComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss',
})
export class ChildAComponent implements OnInit {
  @Input({required: true }) parentForm!: FormArray

  JSON = JSON

  //My Form
  FormG!: FormGroup;

  // for giggles -- create as many childB components
  howManyChildB: Array<number> = [1, 2, 3, 4];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormG = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5) ]],
      middleName:[null, [Validators.minLength(0), Validators.maxLength(1) ]],
    });
    this.parentForm.push(this.FormG);

  }


  isInvalid( f: FormGroup ): boolean {
    return f.invalid && 
        ( f.dirty || 
          f.touched )
  }
}
