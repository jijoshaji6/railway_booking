import { Component } from '@angular/core';
import { StationsService } from '../stations.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {
  trainList: any []= [];  loggedUserData: any;
  constructor(private trainSrv: StationsService){
      
      const localData = localStorage.getItem('trainUser');
      if (localData != null) {
        this.loggedUserData = JSON.parse(localData);
        this.getAllTrains();
  
      }
  }
  getAllTrains() {
    this.trainSrv.getAllBookings(this.loggedUserData.passengerID).subscribe((res:any)=>{
      this.trainList =  res.data;
    })
  }
}