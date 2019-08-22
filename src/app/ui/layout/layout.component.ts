import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  date: number = Date.now();
  constructor(public router: Router) { }

  ngOnInit() {
    this.router.navigate(['services/Todos']);
  }

}
