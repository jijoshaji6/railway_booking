import { Component } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrl: './trains.component.css'
})
export class TrainsComponent {

  trainList: any []= [];
  constructor(private trainSrv: StationsService){
      this.getAllTrains();
  }
  getAllTrains() {
    this.trainSrv.getAllTrains().subscribe((res:any)=>{
      this.trainList =  res.data;
    })
  }
}