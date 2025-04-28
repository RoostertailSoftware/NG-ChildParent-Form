import { EachMapping } from './../../../../node_modules/@jridgewell/trace-mapping/dist/types/types.d';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './../child-a/child-a.component';
import { ErrorsService} from "../../services/errors.service"

@Component({
  selector: 'app-parent',
  imports: [ChildAComponent, CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit {

  // MAIN Form
  parentForm!: FormGroup;
  funArray: Array< any > = new Array< any >()
  constructor(
      private fb: FormBuilder,
      private err: ErrorsService
    ) {}

  ngOnInit(): void {
    // take the main form an build and ARRAY into it for Children
    this.parentForm = this.fb.group({
      childrenForms: this.fb.array([]),
    });
  }

  // create an accessor for the children Array so other forms
  // can be added to it.
  get childrenForms(): FormArray {
    return this.parentForm.get('childrenForms') as FormArray;
  }

  // this is the event listener from the Child
  addChildFormToArray(event: FormGroup) {
    // console.log('Hey! Look, got an event ', event.value);
    this.childrenForms.push(event);
  }
}
