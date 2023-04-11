import { Component , OnInit} from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students: any;

  constructor(private myService:StudentsService){}

  ngOnInit(): void {
    this.myService.getAllStudents().subscribe(
      {
        next:(data)=>{
          this.students = data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
