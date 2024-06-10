import { Component,OnInit } from '@angular/core';
import { StationsService } from '../stations.service';
import { IStation, ResponseModel } from '../stations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  stationList:IStation[]=[];
  travelObj: any = {
    fromStationId:'',
    toStationId:'',
    dateOfTravel:''
  } 
  constructor(private stationSrv:StationsService,private router:Router){
    
  }
  ngOnInit():void{
    this.loadStations();
  }
  onChange(value:any){
    this.travelObj.fromStationId=value.target.value;
    console.log(value);
    
  }
  loadStations(){
    this.stationSrv.getAllStations().subscribe((res:ResponseModel)=>{
      this.stationList=res.data;
    },error=>{
      alert("Error Occured"+JSON.stringify(error))
    })
  }

  onSearch(){
    this.router.navigate(['/search',this.travelObj.fromStationId,this.travelObj.toStationId,this.travelObj.dateOfTravel])
  }
}
