import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ICar } from 'app/models/ICar';
import { HttpService } from 'app/services/http.service';
import { CreateUpdateDialogueComponent } from 'app/shared/dialog/create-update-dialogue/create-update-dialogue.component';

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
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.httpService.getCarById(this.id as string).subscribe(car => this.car = car);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '75vh';
    dialogConfig.width = '60vw';
    dialogConfig.data = {car: this.car};
    const dialogRef = this.dialog.open(CreateUpdateDialogueComponent, dialogConfig);
    
    // dialogRef.afterClosed().subscribe(result => window.location.reload());
  } 

  onDelete() {
    confirm("Are you sure you want to delete this item?");

    this.httpService.deleteCar((this.car as ICar).id).subscribe(()=> this.router.navigate(['']));

  }
}
