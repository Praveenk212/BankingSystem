import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminfunction',
  templateUrl: './adminfunction.component.html',
  styleUrls: ['./adminfunction.component.css']
})
export class AdminfunctionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.router.navigate(['']);
    window.alert("Logging Out::::::::::Admin")
  }

}
