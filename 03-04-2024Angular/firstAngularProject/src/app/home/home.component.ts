import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = '';
  // isDisabled: boolean = true;

  // upBtnState(events: any) {
  //   this.name = events.target.value;
  //   this.isDisabled = this.name.trim().length === 0;
  //   return 1
  // }

  constructor(private http:HttpClient){}


  saveData(formData:NgForm){
    if(formData.valid){
      if(this.buttonText=='Save'){
      this.http.post('http://localhost:3000/student',formData.value).subscribe(data=>{
        console.log(data);
        // this.showData();
      });
      }
      else if(this.recordID){
        this.http.patch(`http://localhost:3000/student/${this.recordID}`, formData.value).subscribe(data => {
          console.log(data);
        this.showData();
        this.buttonText = "Save";
        this.recordID='';
      });
      }
    }
  }

 buttonText:string = "Save";
 recordID:string = '';
  ngOnInit(){
    this.showData();
  }
  studentDAta:any;
  showData(){
    this.retreiveAllData().subscribe((res)=>{
      this.studentDAta = res;
    })
  }

  retreiveAllData():  Observable<any>{
   return this.http.get<any>('http://localhost:3000/student');
  }
  deleteData(recordId:string):Observable<any>{
    // return this.http.delete('http://localhost:3000/student/'+recordId);
    return this.http.delete(`http://localhost:3000/student/${recordId}`);
    
  }

  @ViewChild('myForm') myForm!:NgForm;

  editRow(rowId:string){
    this.retreiveData(rowId).subscribe((result)=>{
      console.log(result);
       if (this.myForm.controls['name'] && this.myForm.controls['phone']) {
        this.myForm.controls['name'].setValue(result.name);
        this.myForm.controls['phone'].setValue(result.phone);
        this.buttonText = "Update"
        this.recordID = rowId;
      }
    
    })
  }

  retreiveData(rowId:string): Observable<any>{
    return this.http.get<any>('http://localhost:3000/student/'+rowId);
  }

  deleteRow(rowId:string){
    this.deleteData(rowId).subscribe((res)=>{
      console.log(res);
      this.showData();
    })
  }

}
