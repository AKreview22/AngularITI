import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderComponent } from './Components/header/header.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentsComponent } from './Components/students/students.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';
import { DeleteStudentComponent } from './Components/delete-student/delete-student.component';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'addStudent', component: AddStudentComponent },
  { path: 'updateStudent/:id', component: UpdateStudentComponent },
  { path: 'deleteStudent/:id', component: DeleteStudentComponent },
  { path: '**', redirectTo: '/error' } // For handling any other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
