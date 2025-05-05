import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../customerfunctionality.component';

@Component({
  selector: 'app-statusofservicerequest',
  templateUrl: './statusofservicerequest.component.html',
  styleUrls: ['./statusofservicerequest.component.css']
})
export class StatusofservicerequestComponent implements OnInit {

  constructor(public appcomponent: AppComponent, public customerfuncomp: CustomerfunctionalityComponent) { }

 

  ngOnInit(): void {
  }
  

}
