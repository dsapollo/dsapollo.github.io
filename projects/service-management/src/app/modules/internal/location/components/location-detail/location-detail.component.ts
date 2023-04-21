import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {

  breadcrumbs: { path?: string; text: string }[] = [
    { text: 'Location | ViewLocations' },
  ];

  locations: Location[] = [];
  constructor(private route: ActivatedRoute,
    private locationService:LocationService,
   ) { }

    locationId!:number;
    locationss?:Location;

  ngOnInit(): void {
    this.getlocationsId();
  }

  getlocationsId(){
    this.route.params.subscribe({
      next:(params) =>{
        this.locationId =params['locationId'];
        if(this.locationId){
          this.getLocationById(Number (this.locationId));
        }

      },
    });
  }

  getLocationById(id: number) {
    this.locationService.findByLocationId(id).subscribe((res) => {
      this.locationss= res.data.findByLocationId;
    });
  }
  print(){
    window.print();
  }

  // back(){
  //   this._location.back();
  // }
}

