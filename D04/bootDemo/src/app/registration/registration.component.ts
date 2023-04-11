import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  formStudentValidation = new FormGroup({
    Name:new FormControl("initializedValue",[Validators.required,Validators.minLength(3)]),
    Age:new FormControl(0,[Validators.required,Validators.max(60),Validators.min(20),Validators.max(40)]),
    Email:new FormControl(0,[Validators.required,Validators.max(60),Validators.email]),

  })
  getStudentData() {
    console.log(this.formStudentValidation);
  }
  get studentNameValid() {
    return this.formStudentValidation.controls["Name"].valid;
  }
  get studentAgeValid() {
    return this.formStudentValidation.controls["Age"].valid;
  }
  get studentEmailValid() {
    return this.formStudentValidation.controls["Email"].valid;
  }
}

