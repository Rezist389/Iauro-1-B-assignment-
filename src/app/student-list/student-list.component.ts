import { Component, OnInit } from '@angular/core';
import { StudDataService } from '../stud-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
 
  studList = [{name:'Rahul Wankhede', rollno: '33'},
  {name:'Rohit Kale', rollno: '24'},];
  constructor(
    private studData: StudDataService
  ) { }

  ngOnInit(): void {
    this.studList = this.studData.getStudentList();
    console.log("this.studList",this.studList);
  }
}
