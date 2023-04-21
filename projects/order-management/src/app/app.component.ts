import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Environment, OrderManagementEnv } from 'projects/shared-lib/src/lib/models/shared.model';
import { Subject } from 'rxjs';
import { Lobs, SharedLibService, ThemeService } from 'shared-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
 onDestory$:Subject<null>= new Subject();

 environment:OrderManagementEnv
 constructor(public stateService:SharedLibService,public router:Router,private themeService:ThemeService,
  @Inject('environment')environment:Environment
  ){
    this.environment =environment.ordermanagement;

 }
  


  ngOnInit(): void {

    this.themeService.setTheme(Lobs.ADMIN);
   
  }

  gotoTop(){
  
  }


  ngOnDestroy(): void {
    this.onDestory$.next(null);
    this.onDestory$.complete();
  }
}
