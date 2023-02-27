import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/modules/location/services/location.service';
import { ReportService } from 'src/app/modules/report/services/report.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  count: string | number = '';

  countloc: string | number = '';
  constructor(
    private reportservice: ReportService,
    private locationservice: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTotalReportCount();
    this.gettotallocation();
  }

  getTotalReportCount() {
    this.reportservice.getTotalReportCount().subscribe(({ data }) => {
      this.count = data.getTotalReportCount;
    });
  }

  gettotallocation() {
    this.locationservice.getTotalLocationCount().subscribe(({ data }) => {
      this.countloc = data.getTotalLocationCount;
    });
  }

  viewreport() {
    this.router.navigate(['report']);
  }
}
