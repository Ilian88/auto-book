import { useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICar } from 'app/models/ICar';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnInit {
  @Input() car?: ICar;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
