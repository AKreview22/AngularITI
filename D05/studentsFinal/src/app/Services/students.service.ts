import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private readonly myClient:HttpClient) { }


  private readonly URL="http://localhost:3000/students"; //API
  
  getAllStudents(){
    return this.myClient.get(this.URL)
  }

  getStudentByID(id:any){
    return this.myClient.get(this.URL +'/'+id)
  }

  addNewStudent(student:any){
    return this.myClient.post(this.URL, student);
  }

  updateStudent(id:any, student: any) {
    return this.myClient.put(this.URL + '/' + id, student);
  }

  deleteStudent(id:any) {
    return this.myClient.delete(this.URL + '/' + id);
  }

}
