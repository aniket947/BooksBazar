import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  productList: any = [];
  constructor() { }

  ngOnInit(): void {
  }
}


