import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudDataService {
  /*getStudentList(): never[] {
    throw new Error('Method not implemented.');
  }*/

  constructor() { }
  getStudentList(){
    return [
      {name:'Rahul Wankhede', rollno: '33'},
      {name:'Rohit kale', rollno: '24'},
      {name:'Aradhya Bopche', rollno: '25'},
      {name:'cheems doge', rollno: '26'},
    ]
};
};
