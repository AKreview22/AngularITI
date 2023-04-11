import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  { path: '**', redirectTo: '/error', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StudentsComponent,
    DetailsComponent,
    ErrorComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
