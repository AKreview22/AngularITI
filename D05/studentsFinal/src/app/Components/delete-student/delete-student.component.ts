import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {

  ID:any;

  constructor(private router: Router, myActivated:ActivatedRoute ,private studentsService: StudentsService) {
    this.ID=myActivated.snapshot.params["id"];
   }


  delete() {
    this.studentsService.deleteStudent(this.ID).subscribe();
    this.router.navigate(['/students']);
 }
}
