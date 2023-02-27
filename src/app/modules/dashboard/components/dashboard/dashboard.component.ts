import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/modules/location/services/location.service';
import { MyorderService } from 'src/app/modules/myorder/services/myorder.service';
import { ReportService } from 'src/app/modules/report/services/report.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  count: string | number = '';
  countpro: string | number = '';
  countloc: string | number = '';
  constructor(
    private reportservice: ReportService,
    private locationservice: LocationService,
    private myorderService: MyorderService
  ) {}

  ngOnInit(): void {
    this.getTotalReportCount();
    this.gettotallocation();
    this.getTotalOrderProductCount();
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

  getTotalOrderProductCount() {
    this.myorderService.getTotalOrderProductCount().subscribe(({ data }) => {
      this.countpro = data.getTotalOrderProductCount;
    });
  }
}
