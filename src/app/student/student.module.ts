import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudDataService } from '../stud-data.service';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { StudentListComponent } from '../student-list/student-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    StudDataService
  ]
  
})
export class StudentModule { }
