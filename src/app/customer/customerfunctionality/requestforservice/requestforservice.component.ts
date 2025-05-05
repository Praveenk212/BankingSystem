import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { CustomerfunctionalityComponent } from '../customerfunctionality.component';

@Component({
  selector: 'app-requestforservice',
  templateUrl: './requestforservice.component.html',
  styleUrls: ['./requestforservice.component.css']
})
export class RequestforserviceComponent implements OnInit {

  constructor(public appcomponent: AppComponent,public customerfuncomp:CustomerfunctionalityComponent) { }

  ngOnInit(): void {
  }

}
