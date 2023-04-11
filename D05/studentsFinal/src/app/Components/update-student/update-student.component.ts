import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit{
  ID:any;
  student:any;

  constructor(private router: Router, myActivated:ActivatedRoute ,private studentsService: StudentsService) {
    this.ID=myActivated.snapshot.params["id"];
   }
  ngOnInit(): void {
    this.studentsService.getStudentByID(this.ID).subscribe({
      next:(data)=>{
        //console.log(data)
        this.student=data;
      },
      error:(err)=>{console.log(err)}
    });  }


  update(name: any, username: any, phone: any, city: any, street: any, building: any, email: any, age: any, courseName: any, courseCode: any, courseInstructor: any, courseCredits: any) {
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

    this.studentsService.updateStudent(this.ID,newStudent).subscribe();
    this.router.navigate(['/students']);
 }

}
