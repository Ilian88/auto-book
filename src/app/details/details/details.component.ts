import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICar } from 'app/models/ICar';
import { HttpService } from 'app/services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id?: string | null;
  car: ICar | undefined;

  constructor(private httpService: HttpService, 
              private activatedRoute: ActivatedRoute,
              private store: Store) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.getCarById(this.id as string).subscribe(car => this.car = car);
  }

}
