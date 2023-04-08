import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sortAlphaNumeric } from 'projects/shared-lib/src/lib/utils/function';
import { ConfigurableLabel, ConfigurableLabelDetail } from '../../../shared/models/ConfigurableLabel';
import { StoreLandingService } from '../../../shared/services/store-landing.service';
import {
  OrderManagementBasePath,
  ServiceManagementBasePath,
} from 'projects/shared-lib/src/lib/utils/constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  currentUrl = this.router.url;
  isDigitalstoreUser = true;
  carouselDetailsLP1: ConfigurableLabel = {};
  carouselDetailsLP2: ConfigurableLabelDetail[] = [];

  constructor(public storeLandingService: StoreLandingService,private router:Router) {}

  ngOnInit(): void {
    this.storeLandingService.getAllLabel().subscribe((res) => {
      this.carouselDetailsLP1 = res.data.getAllLabel
        .filter((i) => i.name.startsWith('LP_1'))
        .reduce((landingPageDetails: ConfigurableLabel, value) => {
           landingPageDetails[value.name] = value;
          return landingPageDetails;
        }, {});
      this.carouselDetailsLP2 = res.data.getAllLabel
        .filter((i) => i.name.startsWith('LP_2'))
        .sort((a, b) => sortAlphaNumeric(a.name, b.name));
    });
  }

  onClick() {
    this.storeLandingService.showLandingInfo=false;
    }

    isOrderManagementRoute() {
      return this.currentUrl.includes(OrderManagementBasePath);
    }

 
}
