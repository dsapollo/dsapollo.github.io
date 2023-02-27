import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../../model/Location';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, AfterContentChecked {
  @ViewChild('tableContent', { read: ElementRef })
  public tableElement!: ElementRef<any>;
  tableReference: any;
  count: string | number = '';

  constructor(
    private router: Router,
    private locationservice: LocationService
  ) {}

  location: Location[] = [];

  ngAfterContentChecked(): void {
    this.tableReference = this.tableElement;
  }

  ngOnInit(): void {
    this.getAllLocations();
    this.gettotallocation();
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
