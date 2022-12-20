import { Component, OnInit } from '@angular/core';
import { StudDataService } from '../stud-data.service';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
   studDetails = [{name:'Rahul Sanjay Wankhede', rollno: '33'},
   {name:'Rohit', rollno: '25'},];
  constructor(
    private studData: StudDataService
  ) { }

  ngOnInit(): void {
    
    this.studDetails = this.studData.getStudentList();
    
    console.log("this.studDetails",this.studDetails);
  
}
}
