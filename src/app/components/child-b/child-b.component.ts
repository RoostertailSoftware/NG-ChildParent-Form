import { Component, output, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-b',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.scss',
})
export class ChildBComponent {
  childsOutput = output<FormGroup>();
  id = input.required<number>();

  FormG!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.FormG = this.fb.group({
      data: [null, [Validators.minLength(this.id()), Validators.required]]
    });

    // emit this FORM to the Parent
    this.childsOutput.emit(this.FormG);

  }
}
