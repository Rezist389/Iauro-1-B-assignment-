import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleapp';
  pageNo: any;
  buttonclicked(index: any){
    console.log("index");
    this.pageNo = index;
  }
}
