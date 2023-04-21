import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location';




@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  host:{
    class:'page-content-router'
  },
})

export class LocationComponent implements OnInit {
breadcrumbs:{path?:string;text:string}[] =[
  {text:'Location-Management'}
]

count: string | number = '';

configureLocationColumn=[
  {
    id:'locName',
    value:'Location Name',
    checked:true,
    defaultVisible:true
  },
  
  {
    id:'locStatus',
    value:'Location Status',
    checked:true,
    defaultVisible:false
  },

  {
    id:'city',
    value:'City/Town',
    checked:true,
  
  },

  {
    id:'address',
    value:'Address',
    checked:true,
    
  },
  {
    id:'scheduler',
    value:'scheduler',
    checked:true,
    
  },
  {
    id:'tester',
    value:'Tester',
    checked:true,
  
  },
  {
    id:'country',
    value:'country',
    checked:true,
   
  },
  {
    id:'loccode',
    value:'postcode',
    checked:true,
    defaultVisible:true
  },

]
constructor(
  private router: Router,
  private locationservice: LocationService
) {}

location: Location[] = [];

  ngOnInit(): void {
    this.getAllLocations();
    this.gettotallocation();
  }

  onCheckboxClick(event:any,locationId:string){
    this.configureLocationColumn.find((locationColumn)=>{
      if(locationId == locationColumn.id){
        locationColumn.checked =locationColumn.defaultVisible?true :event.target.checked;
        event.target.checked =locationColumn.checked;
      }
    });

  }

  viewlocation(locationId: number) {
    this.router.navigate(['service-management/location', 'viewlocation', locationId]);
  }



  createLocation(){

  }

  getAllLocations() {
    this.locationservice.getLocation().subscribe((result) => {
      this.location = result.data.getAllLocations;
    });
  }
  gettotallocation() {
    this.locationservice.getTotalLocationCount().subscribe(({ data }) => {
      this.count = data.getTotalLocationCount;
    });
  }
}