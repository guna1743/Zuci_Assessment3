import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators, FormsModule, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-assignment',
  templateUrl: './reactive-assignment.component.html',
  styleUrls: ['./reactive-assignment.component.css']
})
export class ReactiveAssignmentComponent {
  form: FormGroup = new FormGroup({

    cname: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    amount: new FormControl('')
  });

  submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      cname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      skills: this.fb.array([]),
      amount: ['', [Validators.required, Validators.min(0)]]
    },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  get skillsForms() {
    return this.form.get('skills') as FormArray;
  }

  addSkillFormGroup() {
    this.skillsForms.push(
      this.fb.group({
        machinetype: [''],
        amount: ['0']
      })
    );
  }


  removeskillFormGroup(index: number) {
    this.skillsForms.removeAt(index);
  }

  isDisplay: boolean = false;

  onSubmit(): void {
    this.submitted = true;
    console.log('onsubmit called');
    console.log(this.form.value);

    if (this.form.invalid)
      return
    else {
      console.log(JSON.stringify(this.form.value, null, 2));
      this.isDisplay = true;
    }

  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.isDisplay = false;

  }
}