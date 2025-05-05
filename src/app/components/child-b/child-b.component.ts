import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-b',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss',
})
export class ChildBComponent {
  @Input({required: true }) parentForm!: FormArray;
  @Input({required: true}) id!: number

  FormG!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.FormG = this.fb.group({
      data: [null, [Validators.minLength(this.id), Validators.required]]
    });

    this.parentForm.push(this.FormG);
  }

}
