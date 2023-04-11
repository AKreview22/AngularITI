import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @Output() onStudentAdded = new EventEmitter<any>();
  name ='' ;
  age: number | null = null;

  submitRegistration() {
    const student = {
      name: this.name,
      age: this.age
    };
    this.onStudentAdded.emit(student);
    this.name = '';
    this.age = null;
  }
}
