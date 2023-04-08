import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SharedLibService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
 onDestory$:Subject<null>= new Subject();

 constructor(public stateService:SharedLibService,public router:Router){

 }
  


  ngOnInit(): void {
   
  }

  gotoTop(){
  
  }


  ngOnDestroy(): void {
    this.onDestory$.next(null);
    this.onDestory$.complete();
  }
}
