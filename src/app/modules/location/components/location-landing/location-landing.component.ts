import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-landing',
  templateUrl: './location-landing.component.html',
  styleUrls: ['./location-landing.component.scss']
})
export class LocationLandingComponent implements OnInit {
  breadcrumbs: { path?: string; text: string }[] = [{ text: 'location' }];

  constructor() { }

  ngOnInit(): void {
  }

}
