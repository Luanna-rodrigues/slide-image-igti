import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css']
})
export class GaleriaComponentComponent {

  constructor() { }

  items: any[] = [{ path: 'assets/img/1.jpg', title: 'image 1' },
  { path: 'assets/img/2.jpg', title: 'image 2' },
  { path: 'assets/img/3.jpg', title: 'image 3' },
  { path: 'assets/img/4.jpg', title: 'image 4' },
  { path: 'assets/img/5.jpg', title: 'image 5' },
  { path: 'assets/img/6.jpg', title: 'image 6' }];

  indexSelected = 0;

  first() {
    this.indexSelected = 0;
    console.log(this.indexSelected);
  }

  next() {
    this.indexSelected--;
    console.log(this.indexSelected);
  }
  
  prev() {
    this.indexSelected++;
    console.log(this.indexSelected);
  }

  last() {
    this.indexSelected = 5;
  }
}