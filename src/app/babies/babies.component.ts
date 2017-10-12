import { Component, OnInit } from '@angular/core';
import { Baby } from '../baby';

@Component({
  selector: 'app-babies',
  templateUrl: './babies.component.html',
  styleUrls: ['./babies.component.scss']
})
export class BabiesComponent implements OnInit {

  babies: Baby[] = [
    new Baby('Lola'),
    new Baby('Manuel')
  ];

  constructor() { }

  ngOnInit() {
  }

}
