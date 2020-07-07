import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { SeviceService } from '../service/service.service';
import {  Router } from '@angular/router';
import { Data } from '../model/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  data:Data;
  confirm:string
  constructor(private service:SeviceService,private router: Router) { 
  this.loginForm = new FormGroup({
    number: new FormControl('', Validators.required)
  });}
  ngOnInit(): void {
    this.data=new Data()
  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit() {
   this.service.getNumbervierfy(this.loginForm.get('number').value).subscribe(data => {

     if(data!=null){
       this.data=data;
      
     }
     else{
       console.log('false')
       this.data.valid=false
       this.confirm='number is not valied';
     }
   });
   console.log(this.data.valid)
   this.service.register(this.loginForm.get('number').value,this.data.valid).subscribe(data=>{});
  
    
  }
  onclick(){
    this.router.navigateByUrl('/history');
  }
}
