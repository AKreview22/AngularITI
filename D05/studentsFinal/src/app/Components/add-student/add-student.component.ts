import { Component } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private studentsService: StudentsService) { }


  add(name: any, username: any, phone: any, city: any, street: any, building: any, email: any, age: any, courseName: any, courseCode: any, courseInstructor: any, courseCredits: any) {
    const newStudent = {
      name: name,
      username: username,
      phone: phone,
      address: {
        city: city,
        street: street,
        building: building
      },
      email: email,
      age: age,
      courses: [{
        name: courseName,
        code: courseCode,
        instructor: courseInstructor,
        credits: courseCredits
      }]
    };

    this.studentsService.addNewStudent(newStudent).subscribe();
 }
 
}
