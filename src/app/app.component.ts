import { Component } from '@angular/core';
import { IPassenger } from './stations';
import { StationsService } from './stations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Railway_Booking';
  registerObj:IPassenger=new IPassenger();
  loggedUserData:any;
  constructor(private trainSrv:StationsService){
    const localData=localStorage.getItem('trainUser');
    if(localData != null){
      this.loggedUserData=JSON.parse(localData);
    }
  }

  openRegister(){
    const modal=document.getElementById("myModal");
    if(modal != null){
      modal.style.display='block'
    }
  }
  closeRegister(){
    const modal=document.getElementById("myModal");
    if(modal != null){
      modal.style.display='none'
    }
  }
  openLogin(){
    const modal=document.getElementById("loginModal");
    if(modal != null){
      modal.style.display='block'
    }
  }
  closeLogin(){
    const modal=document.getElementById("loginModal");
    if(modal != null){
      modal.style.display='none'
    }
  }
  onRegister(){
    this.trainSrv.createPassenger(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Registration Success");
        localStorage.setItem('trainUser',JSON.stringify(res.data));
        this.loggedUserData=res.data;
        this.closeRegister();
      }else{
        alert(res.message)
      }
    })
  }
  logout(){
    localStorage.removeItem('trainUser');
    this.loggedUserData=undefined;
  }
  onLogin(){
    this.trainSrv.login(this.registerObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login Success");
        localStorage.setItem('trainUser',JSON.stringify(res.data));
        this.loggedUserData=res.data;
        this.closeLogin();
      }else{
        alert(res.message)
      }
    })
  }
}
