import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagenes: string[] = ['https://lorempixel.com/800/400/food/1', 'https://lorempixel.com/800/400/food/2', 'https://lorempixel.com/800/400/food/3', 'https://lorempixel.com/800/400/food/4'];
  constructor() { }

  ngOnInit() {

  }

}
