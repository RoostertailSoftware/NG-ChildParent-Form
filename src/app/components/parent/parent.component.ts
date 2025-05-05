import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './../child-a/child-a.component';

@Component({
  selector: 'app-parent',
  imports: [ChildAComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {

  // MAIN Form
  parentForm!: FormGroup;
  outputString: string = '';
  constructor( private fb: FormBuilder ) {}

  ngOnInit(): void {
    // take the main form an build and ARRAY into it for Children
    this.parentForm = this.fb.group({
      childrenForms: this.fb.array([]),
    });

  }

  // create an accessor for the children Array so it can be passed on to children
  get childrenForms(): FormArray {
    return this.parentForm.get('childrenForms') as FormArray;
  }

  onSubmit(){
    this.outputString = "I think we have a winner";
  }
}
