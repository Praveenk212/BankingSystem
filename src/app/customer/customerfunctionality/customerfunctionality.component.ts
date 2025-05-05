import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-customerfunctionality',
  templateUrl: './customerfunctionality.component.html',
  styleUrls: ['./customerfunctionality.component.css']
})
export class CustomerfunctionalityComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,public appcomponent: AppComponent,
        private router:Router) { }

  public username;
  ngOnInit(){
    var usernam=this.activatedroute.snapshot.paramMap.get('username')
     console.log("praveen"+usernam)
    this.username=usernam;
  }

  logout()
  {
    this.router.navigate(['']);
    window.alert("Logging Out::::::::::Customer")
  }

}
