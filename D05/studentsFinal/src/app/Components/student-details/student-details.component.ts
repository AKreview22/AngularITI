import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  ID:any;
  student:any;
  
  constructor(myActivated:ActivatedRoute,private myService : StudentsService){
    this.ID=myActivated.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.getStudentByID(this.ID).subscribe({
      next:(data)=>{
        //console.log(data)
        this.student=data;
      },
      error:(err)=>{console.log(err)}
    });

  }

}
