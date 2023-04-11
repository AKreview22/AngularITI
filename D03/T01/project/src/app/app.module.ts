import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Add this line

import { AppComponent } from './app.component';
import { ParentComponent } from './parent-component/parent-component.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    RegistrationComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
