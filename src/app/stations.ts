export interface IStation{
    stationId:number;
    stationName:string;
    stationCode:string;
}
export interface ResponseModel{
    message:string;
    result:boolean;
    data:any;
}
export interface ISearchTrain {
    trainId: number;
    trainNo: number;
    trainName: string;
    departureStationName: number;
    arrivalStationName: number;
    departureTime: string;
    arrivalTime: string;
    totalSeats: number;
    departureDate: string;
    bookedSeats:number;
  }
  
export class IPassenger {
    passengerID: number
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string

    constructor(){
        this.passengerID=0;
        this.firstName='';
        this.lastName='';
        this.email='';
        this.phone='';
        this.password='';
    }
  }
  export class Booking {
    bookingId: number;
    trainId: number;
    passengerId: number;
    travelDate: string;
    bookingDate: Date;
    totalSeats: number;
    TrainAppBookingPassengers: TrainAppBookingPassenger[];
    constructor(){
        this.TrainAppBookingPassengers=[];
        this.bookingId=0;
        this.trainId=0;
        this.passengerId=0;
        this.travelDate='';
        this.bookingDate=new Date;
        this.totalSeats=0;
    }
  }
  
  export class TrainAppBookingPassenger {
    bookingPassengerId: number;
    bookingId: number;
    passengerName: string;
    seatNo: number;
    age: number;
    constructor(){
        this.bookingPassengerId=0;
        this.bookingId=0;
        this.passengerName='';
        this.seatNo=0;
        this.age=0;
    }
  }