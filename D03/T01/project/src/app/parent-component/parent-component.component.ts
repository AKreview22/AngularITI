import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponent {
  studentsData: any[] = [];

  addStudent(student: any) {
    this.studentsData.push(student);
  }
}
